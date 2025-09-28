// astro.config.mjs (or .ts)
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://digitoyou.com',          // helps absolute URLs & sitemap
  srcDir: 'web/src',
  publicDir: 'public',
  outDir: 'dist',
  integrations: [sitemap(), prefetch()],
  vite: {
    build: {
      // smaller/faster CSS (needs Astro ≥4.10 / Vite ≥5)
      cssMinify: 'lightningcss',
      sourcemap: false
    }
  }
});
