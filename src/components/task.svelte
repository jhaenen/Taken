<script lang="ts">
	import type { Tasks } from "src/gql/graphql";

	export let task: Tasks;
</script>

<div>{task.name} door {task.person?.name}</div>