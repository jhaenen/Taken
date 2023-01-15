import type { PageServerLoad } from './$types';
import request from 'graphql-request'
import { CONSTANTS } from '../utils/constants';
import { GetTasksDocument, type Tasks } from '../gql/graphql';

export const load = (async () => {

	const data = await request(CONSTANTS.HASURA_URL, GetTasksDocument)

	let tasks = data.tasks as Tasks[];

	return {
		page: {
			tasks: tasks
		}
	};
}) satisfies PageServerLoad;
