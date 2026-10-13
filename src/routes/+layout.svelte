<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import { description } from '$lib/site';
	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content={description} />
</svelte:head>

<div class="shell">
	<Sidebar />
	<main>{@render children()}</main>
</div>

<style>
	.shell {
		/* The sidebar's current category reaches across half of this to the divider. */
		--side: 11.5rem;
		--gutter: 3.5rem;
		position: relative;
		display: grid;
		grid-template-columns: var(--side) minmax(0, 1fr);
		gap: var(--gutter);
		min-height: 100vh;
		max-width: 78rem;
		padding: 0 2rem;
	}
	/* The divider between sidebar and list, centred in the gutter. */
	.shell::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: calc(2rem + var(--side) + var(--gutter) / 2);
		width: 1px;
		background: var(--line);
	}
	main {
		padding: 2.5rem 0 6rem;
	}
	@media (max-width: 860px) {
		.shell {
			grid-template-columns: minmax(0, 1fr);
			gap: 0;
			min-height: 0;
			padding: 0 1rem;
		}
		.shell::before {
			display: none;
		}
		main {
			padding: 1.5rem 0 4rem;
		}
	}
</style>
