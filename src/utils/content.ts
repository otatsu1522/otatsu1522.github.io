import { getCollection, type CollectionEntry } from 'astro:content';
import { toDateNumber } from './date';

type ArticleCollection = 'journeys' | 'posts';

export async function getPublishedEntries<C extends ArticleCollection>(
  name: C,
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(name, (entry) => entry.data.published);

  return entries.sort(
    (a, b) => toDateNumber(b.data.date) - toDateNumber(a.data.date) || a.id.localeCompare(b.id),
  );
}
