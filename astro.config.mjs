import { defineConfig } from 'astro/config';

export default defineConfig({
  root: '.',
  srcDir: 'web/src',
  publicDir: 'public',
  outDir: 'dist',
  build: {
    sitemap: false
  }
});