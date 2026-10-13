import { categories, sections, type Category } from '$lib/directory';
import { title, description, site, repo } from '$lib/site';

export const prerender = true;

// The directory as Markdown for language models, following llmstxt.org.
export function GET() {
	const lines = [
		`# ${title}`,
		'',
		`> ${description}`,
		'',
		'A curated list of AI tools for scientific research, grouped by what they help with: finding and reading literature, reviewing and checking manuscripts, publishing, and benchmarking AI on research tasks. Each entry links to the tool with a one-line description.'
	];
	if (site) lines.push('', `Browse it at ${site}/.`);
	for (const [id, category] of Object.entries(categories)) {
		lines.push('', `## ${category.title}`);
		for (const s of sections(id as Category)) {
			if (s.title) lines.push('', `### ${s.title}`);
			lines.push('', ...s.rows.map((e) => `- [${e.name}](${e.url}): ${e.blurb}`));
		}
	}
	if (repo) {
		lines.push(
			'',
			'## Contributing',
			'',
			`To add or correct an entry, open a pull request at ${repo}.`,
			'',
			'- Entries are in `src/lib/directory.ts`. Each has a `name`, `url`, `category`, `sub` and a one-line `blurb`.',
			'- Run `npm run icons` to fetch site icons into `static/icons/`, or add one there and map it in `src/lib/icons.json`.',
			'- Run `npm run validate` before opening the pull request.'
		);
	}
	return new Response(lines.join('\n') + '\n', {
		headers: { 'content-type': 'text/plain; charset=utf-8' }
	});
}
