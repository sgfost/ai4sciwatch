import { error } from '@sveltejs/kit';
import { categories, type Category } from '$lib/directory';
import type { EntryGenerator, PageLoad } from './$types';

// Assistants live at the root; the other categories get their own page.
const ids = Object.keys(categories).filter((c) => c !== 'assistants');

export const entries: EntryGenerator = () => ids.map((category) => ({ category }));

export const load: PageLoad = ({ params }) => {
	if (!ids.includes(params.category)) error(404);
	return { category: params.category as Category };
};
