<script lang="ts">
	import { asset } from '$app/paths';
	import type { Asset } from '$app/types';
	import { categories, entries, sections, type Category, type Entry } from './directory';
	import { search, matches } from './search.svelte';
	import { title } from './site';
	import icons from './icons.json';
	let { id }: { id: Category } = $props();
	const category = $derived(categories[id]);
	const shown = $derived(
		sections(
			id,
			entries.filter((e) => matches(e, search.query))
		)
	);
	const iconFor = (e: Entry) => {
		const file = (icons as Record<string, Asset>)[e.url];
		return file && asset(file);
	};
	const monogram = (s: string) =>
		s
			.replace(/^the\s+/i, '')
			.charAt(0)
			.toUpperCase();
	const hue = (name: string) =>
		[...name].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7) % 8;
</script>

<svelte:head><title>{category.title} · {title}</title></svelte:head>

<h1 class="sr">{category.title}</h1>

{#each shown as s}{#if s.rows.length}
		<section>
			{#if s.title}<h2>{s.title}</h2>{/if}
			<ul>
				{#each s.rows as e (e.url)}<li>
						<span class="name"
							>{#if iconFor(e)}<img
									class="icon"
									src={iconFor(e)}
									alt=""
									width="16"
									height="16"
									loading="lazy"
								/>{:else}<span class="icon mono h{hue(e.name)}" aria-hidden="true"
									>{monogram(e.name)}</span
								>{/if}<a href={e.url} target="_blank" rel="noopener noreferrer">{e.name}</a></span
						>
						<p class="blurb" title={[e.blurb, ...(e.notes ?? [])].join('\n\n')}>{e.blurb}</p>
					</li>{/each}
			</ul>
		</section>
	{/if}{/each}
{#if !shown.some((s) => s.rows.length)}<p class="none">
		Nothing here matches “{search.query}”.
	</p>{/if}

<style>
	section {
		position: relative;
	}
	/* A divider centred between sections, from the sidebar's divider to the window's edge. */
	section + section {
		margin-top: 1.25rem;
		padding-top: 1.25rem;
	}
	section + section::before {
		content: '';
		position: absolute;
		top: -4px;
		left: calc(var(--gutter) / -2);
		right: -100vw;
		height: 8px;
		background: var(--line);
		mask: url('./wave.svg') repeat-x;
	}
	h2 {
		margin: 0 0 0.5rem;
		color: var(--muted);
		font-family: var(--mono);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: flex;
		gap: 1.1rem;
		align-items: baseline;
		padding: 0.25rem 0;
	}
	.name {
		flex: none;
		max-width: 60%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.name a {
		color: var(--accent);
		font-size: 0.825rem;
		font-weight: 500;
		text-decoration: none;
	}
	.name a:visited {
		color: var(--visited);
	}
	.name a:hover {
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	/* One line per entry; the full description and notes are in the tooltip. */
	.blurb {
		flex: 1;
		min-width: 0;
		margin: 0;
		overflow: hidden;
		color: var(--soft);
		font-size: 0.775rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.icon {
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-right: 0.55rem;
		border-radius: 3px;
		vertical-align: -3px;
		background: var(--tile);
		object-fit: contain;
	}
	.mono {
		color: #fff;
		font-size: 10px;
		font-weight: 700;
		line-height: 16px;
		text-align: center;
	}
	.h0 {
		background: #5b6b8c;
	}
	.h1 {
		background: #7a5c7e;
	}
	.h2 {
		background: #4f7a6a;
	}
	.h3 {
		background: #8a6a45;
	}
	.h4 {
		background: #6a7a4a;
	}
	.h5 {
		background: #8a5550;
	}
	.h6 {
		background: #4a7482;
	}
	.h7 {
		background: #66615a;
	}
	.none {
		color: var(--muted);
	}

	@media (max-width: 860px) {
		li {
			gap: 0.8rem;
		}
		section + section::before {
			left: -1rem;
			/* Stop at the window's edge; 100vw would overflow sideways. */
			right: -1rem;
		}
	}
</style>
