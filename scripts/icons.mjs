// Downloads each entry's site icon into static/icons/ and writes src/lib/icons.json.
// Run by hand when entries change: `npm run icons`. Works on any OS (resizes with `sharp`).
// Icons are self-hosted so the site makes no third-party requests.
import { mkdir, rm, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { entries } from '../src/lib/directory.ts';

const OUT = 'static/icons';
const UA =
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36';
const MAX_BYTES = 300_000;

// Hosts whose icons are white-only and vanish on the light tile; these get a monogram.
const skip = new Set(['inspectai.app']);

async function get(url) {
	const res = await fetch(url, {
		headers: { 'user-agent': UA },
		signal: AbortSignal.timeout(15000)
	});
	if (!res.ok) throw new Error(`${res.status} ${url}`);
	return res;
}

async function iconCandidates(pageUrl) {
	const res = await get(pageUrl);
	const html = await res.text();
	const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
	const attr = (tag, name) => tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1];
	const icons = links
		.map((tag) => ({
			rel: attr(tag, 'rel') ?? '',
			href: attr(tag, 'href'),
			sizes: attr(tag, 'sizes')
		}))
		.filter((l) => l.href && /(^|\s)(icon|apple-touch-icon)/i.test(l.rel))
		.map((l) => ({
			url: new URL(l.href, res.url).href,
			score:
				(/apple-touch/i.test(l.rel) ? 1000 : 0) +
				(/\.svg(\?|$)/i.test(l.href) ? 500 : 0) +
				Number(l.sizes?.match(/\d+/)?.[0] ?? 16)
		}))
		.sort((a, b) => b.score - a.score)
		.map((l) => l.url);
	return [...icons, new URL('/favicon.ico', res.url).href];
}

// One icon per host, so every GitHub or arXiv link shows that site's icon.
function fileKey(url) {
	return new URL(url).hostname.replace(/^www\./, '').replace(/[^a-z0-9.-]/gi, '-');
}

// sharp can't read .ico; pull out the largest embedded PNG frame if there is one.
// (Legacy BMP-only icons throw in sharp and fall through to the next candidate.)
function unwrapIco(buf) {
	if (buf.length < 6 || buf.readUInt16LE(0) !== 0 || buf.readUInt16LE(2) !== 1) return buf;
	let best = null;
	for (let i = 0; i < buf.readUInt16LE(4); i++) {
		const size = buf.readUInt32LE(6 + i * 16 + 8);
		const offset = buf.readUInt32LE(6 + i * 16 + 12);
		const frame = buf.subarray(offset, offset + size);
		if (frame.subarray(1, 4).toString() === 'PNG' && (!best || size > best.length)) best = frame;
	}
	return best ?? buf;
}

async function save(iconUrl, key) {
	const res = await get(iconUrl);
	const type = res.headers.get('content-type') ?? '';
	const bytes = Buffer.from(await res.arrayBuffer());
	if (bytes.length === 0 || bytes.length > MAX_BYTES) throw new Error(`bad size ${bytes.length}`);
	if (/html|json|text\/plain/.test(type)) throw new Error(`not an image: ${type}`);
	if (type.includes('svg') || /\.svg(\?|$)/i.test(iconUrl)) {
		await writeFile(`${OUT}/${key}.svg`, bytes);
		return `${key}.svg`;
	}
	await sharp(unwrapIco(bytes)).resize(64, 64, { fit: 'inside' }).png().toFile(`${OUT}/${key}.png`);
	return `${key}.png`;
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const byKey = new Map();
const manifest = {};

for (const e of entries) {
	const host = new URL(e.url).hostname;
	if (skip.has(host)) continue;
	const key = fileKey(e.url);
	if (!byKey.has(key)) {
		byKey.set(
			key,
			(async () => {
				const candidates = await iconCandidates(e.url).catch(() => []);
				candidates.push(`https://www.google.com/s2/favicons?domain=${host}&sz=64`);
				for (const c of candidates) {
					try {
						return await save(c, key);
					} catch {}
				}
				return null;
			})()
		);
	}
	const file = await byKey.get(key);
	if (file) manifest[e.url] = `/icons/${file}`;
	console.log(file ? '✓' : '·', e.name, file ?? '');
}

await writeFile('src/lib/icons.json', JSON.stringify(manifest, null, '\t') + '\n');
console.log(`${Object.keys(manifest).length} of ${entries.length} entries have icons`);
