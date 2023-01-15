import type { PageServerLoad } from './$types';
import request from 'graphql-request'
import { graphql } from '../gql/gql'
import { CONSTANTS } from '../utils/constants';

export const load = (async () => {
	const getTasksQueryDocument = graphql(`
		query GetTasks {
			tasks {
				id
				name
				person {
					name
				}
				room {
					name
				}
			}
		}

	`)

	const data = await request(CONSTANTS.HASURA_URL, getTasksQueryDocument)

	return {
		page: {
			tasks: data.tasks
		}
	};
}) satisfies PageServerLoad;
