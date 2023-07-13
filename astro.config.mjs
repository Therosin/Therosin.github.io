import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";
import markdownIntegration from '@astropub/md'

// https://astro.build/config
export default defineConfig({
  site: 'https://therosin.github.io',
  integrations: [vue(), mdx(), partytown(), sitemap(), markdownIntegration()],
  output: 'static',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    // syntaxHighlight: 'shiki'
    // syntaxHighlight: 'prism'
  },
  build: {
    assets: 'static',
    format: 'directory',   
  },
  publicDir: 'static',
});
