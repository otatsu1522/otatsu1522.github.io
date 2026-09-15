// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: 本番ドメインが決まったら実際のURLに差し替える。
  // sitemap連携やSNSのOGP絶対URL生成に必要。
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
