import { error } from '@sveltejs/kit';
import { casestudies } from '$lib/data.js';

export function load({ params }) {
	const casestudy = casestudies.find((casestudy) => casestudy.slug === params.slug);

	if (!casestudy) throw error(404);
	return {
		casestudy
	};
}
