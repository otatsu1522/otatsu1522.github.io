import type { APIContext } from 'astro';
import { siteMeta } from '../data/site';
import { defaultLanguage } from '../data/language';
import { routes } from '../data/routes';
import { getPublishedEntries } from '../utils/content';
import { toDateNumber, toIsoDate } from '../utils/date';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET({ site }: APIContext) {
  const [journeys, posts] = await Promise.all([
    getPublishedEntries('journeys'),
    getPublishedEntries('posts'),
  ]);

  const articles = [
    ...journeys.map((entry) => ({ entry, path: routes.journeys })),
    ...posts.map((entry) => ({ entry, path: routes.posts })),
  ].sort((a, b) => toDateNumber(b.entry.data.date) - toDateNumber(a.entry.data.date));

  const items = articles
    .map(({ entry, path }) => {
      const url = new URL(`${path}${entry.id}/`, site).href;
      const isoDate = toIsoDate(entry.data.date);

      return [
        '    <item>',
        `      <title>${escapeXml(entry.data.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escapeXml(entry.data.summary)}</description>`,
        isoDate && `      <pubDate>${new Date(isoDate).toUTCString()}</pubDate>`,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteMeta.title)}</title>
    <link>${site?.href}</link>
    <description>${escapeXml(siteMeta.description)}</description>
    <language>${defaultLanguage}</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
