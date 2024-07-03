import { redirect, fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
export async function load({ cookies }) {
	let error: Error;
	let loading: boolean;

	try {
		const response = await fetch(
			'https://discord.com/api/v9/channels/931448370961203260/messages?limit=50',
			{
				headers: {
					Authorization: `${env.AUTHORIZATION}`,
					'Content-Type': 'application/json' // Optional: specify content type if needed
				}
			}
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		let dataReturn = await response.json();

		return { return: dataReturn };
	} catch (err) {
		error = err.message;
	} finally {
		loading = false;
	}
	return;
}
