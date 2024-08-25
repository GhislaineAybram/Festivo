// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: Number(process.env.PORT_FRONT),
  },

  nitro: {
    experimental: {
      database: true
    },
    database: {
      default: {
        connector: 'sqlite',
        options: { name: 'db' }
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module', 
    'nuxt-icons'
  ],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    },
    database: {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    },
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