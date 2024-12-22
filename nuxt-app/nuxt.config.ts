// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import Aura from '@primevue/themes/aura'
import { defineNuxtConfig } from 'nuxt/config'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '../.env') })

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'Festivo',
          content: 'Organisez vos événements et invitez vos amis facilement avec Festivo. Créez, gérez et partagez vos événements en un clic.',
        },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Festivo, where every event comes to life',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },

  devtools: { enabled: true },

  devServer: {
    port: Number(process.env.PORT_FRONT),
  },

  typescript: {
    typeCheck: true,
    tsConfig: {
      exclude: [
        '.nuxt',
        'dist',
      ],
    },
  },

  nitro: {
    experimental: {
      database: true,
    },
    database: {
      default: {
        connector: 'sqlite',
        options: { name: 'db' },
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-icons',
    '@nuxtjs/supabase',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json' },
    ],
    defaultLocale: 'en',
    langDir: './',
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
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
          cssLayer: false,
        },
      },
    },
  },

  runtimeConfig: {
    bcryptSaltRound: 10,
    public: {
      apiUrl: process.env.API_URL,
      url: process.env.PORT_FRONT,
    },
    session: {
      name: 'nuxt-session',
      password: process.env.NUXT_SESSION_PASSWORD || '',
      cookie: {
        sameSite: 'lax',
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },

  css: [
    'primeicons/primeicons.css',
    '~/assets/primevue-custom-theme.scss',
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
  ],

  googleFonts: {
    families: {
      Montserrat: true,
      Cinzel: true,
      Quattrocento: true,
    },
  },

  compatibilityDate: '2024-07-12',
})
