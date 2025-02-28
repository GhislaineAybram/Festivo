// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/no-unused-refs': ['error'],
    '@stylistic/max-statements-per-line': ['off'],
  },
},
)
