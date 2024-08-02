// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: Number(process.env.PORT_FRONT),
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module', 
    'nuxt-icons'
  ],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },

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
    },
  },

  css: [
    'primeicons/primeicons.css'
  ],

  compatibilityDate: '2024-07-12',
});