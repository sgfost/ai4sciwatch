<script lang="ts">
	import { resolve } from '$app/paths';
	import { repo } from './site';
	let copied = $state(false);
	async function copy() {
		await navigator.clipboard.writeText(new URL(resolve('/llms.txt'), location.href).href);
		copied = true;
		setTimeout(() => (copied = false), 1500);
	}
</script>

<p>
	<button type="button" title="Copy the link to llms.txt" onclick={copy}
		>{copied ? 'Copied' : 'llms.txt'}<svg viewBox="0 0 16 16" aria-hidden="true"
			><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" /><path
				d="M10.5 3.5v-.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.5"
			/></svg
		></button
	><!-- Without a repo (local builds) it shows but links nowhere. --><a
		href={repo || undefined}
		target="_blank"
		rel="noopener noreferrer"
		>contribute<svg viewBox="0 0 16 16" aria-hidden="true"
			><circle cx="4" cy="3.5" r="1.5" /><circle cx="4" cy="12.5" r="1.5" /><circle
				cx="12"
				cy="12.5"
				r="1.5"
			/><path d="M4 5v6M12 11V6.5a2 2 0 0 0-2-2H7.5M9 3 7.5 4.5 9 6" /></svg
		></a
	>
</p>

<style>
	p {
		display: flex;
		gap: 1.25rem;
		margin: 0;
		font-size: 0.75rem;
	}
	button,
	a {
		display: inline-flex;
		gap: 0.35rem;
		align-items: center;
		padding: 0;
		border: 0;
		background: none;
		color: var(--faint);
		font: inherit;
		text-decoration: none;
		cursor: pointer;
	}
	button:hover,
	a:hover {
		color: var(--ink);
	}
	svg {
		width: 0.75rem;
		height: 0.75rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.3;
	}
</style>
