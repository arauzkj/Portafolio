// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://arauzkj.dev',

  integrations: [sitemap(
    {i18n: {
      defaultLocale: 'es',
      locales: { es: 'es-ES', en: 'en-US' },
    }},
  ), icon()],

  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify()
});