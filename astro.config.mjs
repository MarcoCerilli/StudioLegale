// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://avvocatoannafusco.it',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  redirects: {
    '/chi-sono': '/',
    '/aree-di-attivita': '/',
    '/aree-di-attivita/diritto-civile': '/',
    '/aree-di-attivita/diritto-penale': '/',
    '/aree-di-attivita/diritto-di-famiglia': '/',
    '/aree-di-attivita/infortunistica-stradale': '/',
    '/aree-di-attivita/recupero-crediti': '/',
    '/aree-di-attivita/diritto-del-lavoro': '/',
    '/aree-di-attivita/risarcimento-danni': '/',
    '/servizi': '/',
    '/attestati': '/',
    '/contatti': '/'
  }
});