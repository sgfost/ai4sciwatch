<script lang="ts">
	import List from '$lib/List.svelte';
	let { data } = $props();
</script>

<List id={data.category} />
