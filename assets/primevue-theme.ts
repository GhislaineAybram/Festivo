// primevue-theme.ts
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      500: '$indigo', // Couleur principale
    },
    secondary: {
      500: '$tangerine', // Couleur secondaire principale
    },
  },
})

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: '.p-dark',
  },
}
