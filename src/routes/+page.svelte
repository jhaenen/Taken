<script lang="ts">
	import Task from '../components/task.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.page.tasks as task}
	<Task {task} />
{/each}
