// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['*.test.ts', '*.spec.ts'],
  rules: {
    'vue/no-unused-refs': ['error'],
    '@stylistic/max-statements-per-line': ['off'],
  },
},
)
