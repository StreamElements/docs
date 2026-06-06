import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Products that changelog entries can belong to. The key doubles as the
 * folder name under src/content/changelog/ and the URL segment for
 * filtered feeds (/changelog/product/{id}/).
 */
export const PRODUCTS = {
  chatbot: { name: 'Chatbot', url: '/chatbot/' },
  overlays: { name: 'Overlays', url: '/overlays/' },
  websockets: { name: 'WebSockets', url: '/websockets/' },
  dashboard: { name: 'Dashboard', url: 'https://streamelements.com/dashboard' },
  docs: { name: 'Docs', url: '/' },
} as const;

export type ProductId = keyof typeof PRODUCTS;

export const PAGE_SIZE = 25;

export interface ChangelogEntry extends CollectionEntry<'changelog'> {
  /** Permalink slug: the entry id with its product folder stripped. */
  slug: string;
}

/**
 * All visible changelog entries, newest first. The product folder an entry
 * lives in is automatically added to its `products`; unknown folders are a
 * build error. Hidden and future-dated entries are dropped.
 */
export async function getChangelog(): Promise<ChangelogEntry[]> {
  const entries = await getCollection('changelog');
  const now = new Date();
  const seen = new Map<string, string>();

  return entries
    .map((entry) => {
      const [folder, ...rest] = entry.id.split('/');
      if (!folder || !(folder in PRODUCTS) || rest.length === 0) {
        throw new Error(
          `Changelog entry "${entry.id}" must live in a product folder ` +
            `(one of: ${Object.keys(PRODUCTS).join(', ')})`,
        );
      }
      const products = entry.data.products.includes(folder as ProductId)
        ? entry.data.products
        : [folder as ProductId, ...entry.data.products];
      const slug = rest.join('/');
      const conflict = seen.get(slug);
      if (conflict) {
        throw new Error(`Changelog slug collision: "${entry.id}" and "${conflict}" both map to /changelog/post/${slug}/`);
      }
      seen.set(slug, entry.id);
      return { ...entry, slug, data: { ...entry.data, products } };
    })
    .filter((entry) => !entry.data.hidden && entry.data.date <= now)
    .sort((a, b) => +b.data.date - +a.data.date);
}

/** Product ids that have at least one visible entry (drives the filter dropdown). */
export async function getActiveProductIds(): Promise<ProductId[]> {
  const entries = await getChangelog();
  const active = new Set(entries.flatMap((entry) => entry.data.products));
  return (Object.keys(PRODUCTS) as ProductId[]).filter((id) => active.has(id));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
