import { casestudies } from '../../../lib/data.js';

export function load({ params }) {
	const casestudy = casestudies.find((casestudy) => casestudy.slug === params.slug);

	return {
		casestudy
	};
}
