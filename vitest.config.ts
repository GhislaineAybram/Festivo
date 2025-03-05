import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary'],
      include: ['pages/**/*.vue', 'components/**/*.vue', 'utils/**/*.ts', 'server/api/**/*.ts'],
      exclude: ['node_modules/', 'dist/', 'coverage/', 'nuxt.config.ts', 'server/middleware/*.ts', 'components/icons/**/*.vue'],
    },
    // you can optionally set Nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
    //     domEnvironment: 'happy-dom', // 'happy-dom' (default) or 'jsdom'
    //     overrides: {
    //       // other Nuxt config you want to pass
    //     }
    //   }
    // }
  },
})
