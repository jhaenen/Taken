<script lang="ts">
	import Taak from '../components/task.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.page.tasks as task}
	<Taak {task} />
{/each}
