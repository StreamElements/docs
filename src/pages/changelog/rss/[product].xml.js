import rss from '@astrojs/rss';
import { getChangelog, getActiveProductIds, PRODUCTS } from '../../../data/changelog';

export async function getStaticPaths() {
  const active = await getActiveProductIds();
  return active.map((product) => ({ params: { product } }));
}

export async function GET(context) {
  const { product } = context.params;
  const entries = (await getChangelog()).filter((entry) => entry.data.products.includes(product));
  return rss({
    title: `StreamElements ${PRODUCTS[product].name} Changelog`,
    description: `New updates and improvements to ${PRODUCTS[product].name} at StreamElements.`,
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/changelog/post/${entry.slug}`,
      categories: entry.data.products.map((id) => PRODUCTS[id].name),
    })),
    customData: '<language>en-us</language>',
  });
}
