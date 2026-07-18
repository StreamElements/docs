import rss from '@astrojs/rss';
import { getChangelog, PRODUCTS } from '../../data/changelog';

export async function GET(context) {
  const entries = await getChangelog();
  return rss({
    title: 'StreamElements Changelog',
    description: 'New updates and improvements at StreamElements.',
    site: context.site,
    items: entries.map((entry) => ({
      title: `${entry.data.products.map((id) => PRODUCTS[id].name).join(', ')} - ${entry.data.title}`,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/changelog/post/${entry.slug}`,
      categories: entry.data.products.map((id) => PRODUCTS[id].name),
    })),
    customData: '<language>en-us</language>',
  });
}
