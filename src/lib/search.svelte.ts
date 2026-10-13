import { organisations, type Entry } from './directory';

// Shared by the sidebar and the list, so a search survives switching category.
export const search = $state({ query: '' });

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function matches(e: Entry, query: string) {
	const text = fold(
		[
			e.name,
			e.blurb,
			e.author,
			...(e.organisationIds ?? []).map((id) => organisations[id].name),
			...(e.notes ?? [])
		].join(' ')
	);
	return fold(query)
		.split(/\s+/)
		.every((t) => text.includes(t));
}
