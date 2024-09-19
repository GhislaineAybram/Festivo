// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  // options here
})
  .override(
    'nuxt/typescript/setup', // specify the name of the target config, or index
    {
      rules: {
        // ...Override rules, for example:
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  )
