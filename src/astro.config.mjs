// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',  // 生成纯静态 HTML，适合 Cloudflare Pages
  site: 'https://www.dotwise.top',
  trailingSlash: 'never',
});