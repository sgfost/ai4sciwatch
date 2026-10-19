<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { categories, entries, type Category } from './directory';
	import { search, matches } from './search.svelte';
	import { description } from './site';
	import Links from './Links.svelte';
	const ids = Object.keys(categories) as Category[];
	const current = $derived((page.params.category ?? 'assistants') as Category);
	const href = (c: Category) =>
		c === 'assistants' ? resolve('/') : resolve('/[category]', { category: c });
	const count = (c: Category) =>
		entries.filter((e) => e.category === c && matches(e, search.query)).length;
	function onkeydown(e: KeyboardEvent) {
		if (e.key === '/' && !(e.target instanceof HTMLInputElement)) {
			e.preventDefault();
			document.getElementById('q')?.focus();
		}
	}
</script>

<svelte:window {onkeydown} />

<aside>
	<a class="home" href={resolve('/')}>AI<span class="four">4</span>SciWatch</a>
	<p class="about">{description}</p>
	<div class="links"><Links /></div>
	<label class="search"
		><span class="sr">Search</span><svg class="glass" viewBox="0 0 16 16" aria-hidden="true"
			><circle cx="7" cy="7" r="4.5" /><path d="m10.4 10.4 3.1 3.1" /></svg
		><input
			id="q"
			type="search"
			bind:value={search.query}
			placeholder=" "
			autocomplete="off"
			spellcheck="false"
		/><kbd aria-hidden="true">/</kbd></label
	>
	<nav aria-label="Categories">
		<ul>
			{#each ids as c}<li>
					<a href={href(c)} aria-current={c === current ? 'page' : undefined}
						>{categories[c].title}<span class="n">{count(c)}</span></a
					>
				</li>{/each}
		</ul>
	</nav>
</aside>

<style>
	aside {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding: 2.5rem 0 2rem;
	}
	.home {
		align-self: start;
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		text-decoration: none;
	}
	.four {
		color: var(--accent);
	}
	.about {
		margin: 0.5rem 0 0;
		color: var(--muted);
		font-size: 0.8rem;
		line-height: 1.4;
	}
	.links {
		margin-top: 0.6rem;
	}

	/* Search sits at the bottom of the sidebar; on narrow screens it returns to the top. */
	.search {
		position: relative;
		display: block;
		order: 1;
		margin: auto -0.75rem 0;
	}
	nav {
		margin-top: 1.75rem;
	}
	.search input {
		width: 100%;
		padding: 0.5rem 2rem 0.5rem 2.1rem;
		border: 1px dashed var(--dash);
		border-radius: 10px;
		background: none;
		color: var(--ink);
		font: inherit;
	}
	.search input:focus {
		outline: none;
	}
	.glass {
		position: absolute;
		left: 0.75rem;
		top: 50%;
		translate: 0 -50%;
		width: 0.9rem;
		height: 0.9rem;
		fill: none;
		stroke: var(--faint);
		stroke-width: 1.5;
		stroke-linecap: round;
		pointer-events: none;
	}
	.search input::-webkit-search-cancel-button {
		display: none;
	}
	kbd {
		position: absolute;
		right: 0.75rem;
		top: 50%;
		translate: 0 -50%;
		color: var(--faint);
		font: inherit;
		font-size: 0.75rem;
	}
	.search input:focus + kbd,
	.search input:not(:placeholder-shown) + kbd {
		display: none;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	nav a {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		margin: 0.1rem -0.75rem;
		padding: 0.4rem 0.75rem;
		border: 1px dashed transparent;
		border-radius: 10px;
		color: var(--muted);
		/* Set like the list's section headings. */
		font-family: var(--mono);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
		transition:
			border-color 0.2s,
			color 0.2s;
	}
	nav a:hover {
		color: var(--ink);
	}
	nav a[aria-current='page'] {
		position: relative;
		color: var(--ink);
		border-color: var(--dash);
	}
	/* A line from the current category out to the divider; the pill overhangs by 0.75rem. */
	nav a[aria-current='page']::after {
		content: '';
		position: absolute;
		top: 50%;
		/* From the outside of the border to the divider. */
		left: calc(100% + 1px);
		width: calc(var(--gutter) / 2 - 0.75rem);
		height: 1px;
		background: var(--line);
	}
	.n {
		color: var(--faint);
		font-weight: 400;
		font-variant-numeric: tabular-nums;
	}
	/* On narrow screens the sidebar becomes a header with wrapping rows. */
	@media (max-width: 860px) {
		/* Title and search share the first row; categories wrap below. */
		aside {
			position: relative;
			flex-flow: row wrap;
			align-items: center;
			gap: 1rem 1.25rem;
			height: auto;
			/* Edge to edge, so the divider spans the window. */
			margin: 0 -1rem;
			padding: 1.5rem 1rem 1.25rem;
		}
		aside::after {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 0;
			right: 0;
			height: 8px;
			background: var(--line);
			mask: url('./wave.svg') repeat-x;
		}
		.search {
			flex: 1;
			order: 0;
			margin: 0;
		}
		.about {
			flex-basis: 100%;
			order: 1;
			margin: -0.25rem 0 0;
		}
		.links {
			flex-basis: 100%;
			order: 1;
			margin: -0.5rem 0 0;
		}
		nav {
			flex-basis: 100%;
			order: 2;
			margin-top: 0;
		}
		/* Tabs wrap onto extra rows; never scroll sideways. */
		nav ul {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
			min-width: 0;
		}
		nav a {
			margin: 0;
		}
		nav a[aria-current='page']::after {
			display: none;
		}
	}
</style>
