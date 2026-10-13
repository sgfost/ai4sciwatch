<script lang="ts">
	import { onMount } from 'svelte';

	let dark = $state(false);

	onMount(() => {
		const set = document.documentElement.dataset.theme;
		dark = set ? set === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
	});

	function toggle() {
		dark = !dark;
		const theme = dark ? 'dark' : 'light';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('ai4sciwatch.theme', theme);
		} catch {}
	}
</script>

<button type="button" onclick={toggle} aria-label={dark ? 'Use light theme' : 'Use dark theme'}>
	<svg viewBox="0 0 16 16" aria-hidden="true">
		<circle cx="8" cy="8" r="6.25" />
		<path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" />
	</svg>
</button>

<style>
	button {
		position: fixed;
		top: 0.75rem;
		right: 0.75rem;
		z-index: 10;
		display: grid;
		padding: 0.25rem;
		border: 0;
		background: none;
		color: var(--muted);
		cursor: pointer;
	}
	button:hover {
		color: var(--ink);
	}
	svg {
		width: 0.8rem;
		height: 0.8rem;
	}
	circle {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
	}
	path {
		fill: currentColor;
	}
	/* Phones follow the system theme. */
	@media (max-width: 860px) {
		button {
			display: none;
		}
	}
</style>
