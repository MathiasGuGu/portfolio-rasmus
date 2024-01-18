import { casestudies } from '../../lib/data.js';

export function load() {
	return {
		summaries: casestudies.map((casestudy) => ({
			title: casestudy.title,
			subtitle: casestudy.subtitle,
			slug: casestudy.slug,
			cover: casestudy.cover,
			stanseriss: casestudy.stanseriss,
			annonser: casestudy.annonser
		}))
	};
}
