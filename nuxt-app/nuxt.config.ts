// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module', 
    'nuxt-icons', 
    // 'nuxt-primevue'
  ],

  primevue: {
    usePrimeVue: true,
    options: {
        ripple: true,
        inputVariant: 'filled',
        theme: {
          preset: Aura,
          options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
          }
        }
    }
  },

  compatibilityDate: '2024-07-12',
});