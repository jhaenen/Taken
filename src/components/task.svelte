<script lang="ts">
	import type { Tasks } from "src/gql/graphql";

	export let task: Tasks;
</script>

<div class="text-3xl font-bold underline">{task.name} door {task.person?.name}</div>