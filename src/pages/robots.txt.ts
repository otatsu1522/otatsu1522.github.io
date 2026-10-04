import type { APIContext } from 'astro';
import { routes } from '../data/routes';

export function GET({ site }: APIContext) {
  const sitemapUrl = new URL(routes.sitemap, site);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
