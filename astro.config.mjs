// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://arauzdev.netlify.app/',
  integrations: [sitemap(
    {i18n: {
      defaultLocale: 'es',
      locales: {'es': 'Español', 'en': 'English'},
    }},
  ), icon()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  }
});