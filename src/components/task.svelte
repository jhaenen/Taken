<script lang="ts">
	interface task {
		name: string;
	}

	export let task: task;
</script>

<div>{task.name}</div>
