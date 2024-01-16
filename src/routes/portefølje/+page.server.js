import { casestudies } from '../../lib/data.js';

export function load() {
	return {
		summaries: casestudies.map((casestudy) => ({
			id: casestudy.id,
			title: casestudy.title,
			subtitle: casestudy.subtitle,
			slug: casestudy.slug
		}))
	};
}
