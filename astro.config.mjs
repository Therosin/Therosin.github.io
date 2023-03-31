import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://therosin.github.io',
  integrations: [vue(), mdx(), partytown(), sitemap()]
});
