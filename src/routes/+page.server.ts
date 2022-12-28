import type { PageServerLoad } from './$types';

interface task {
	name: string;
}

export const load = (async () => {
	// Perform post request to server
	const response = await fetch('http://localhost:8080/v1/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query: '{ tasks { name } }' })
	});
	const resp = await response.json();
	const tasks: task[] = resp.data.tasks;

	console.log(tasks);

	return {
		page: {
			tasks: tasks
		}
	};
}) satisfies PageServerLoad;
