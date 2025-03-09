<script setup lang="ts">
/**
 * @file app.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Main component of Nuxt application.
 */

import { ref } from 'vue'
import { useRouter } from 'nuxt/app'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
})

const isLoading = ref(false)
const router = useRouter()

onMounted(() => {
  router.beforeEach((to, from) => {
    // Ne pas afficher lors du chargement initial
    if (from.name !== undefined) {
      isLoading.value = true
    }
    return true
  })

  router.afterEach(() => {
    // Petit délai pour éviter le clignotement
    setTimeout(() => {
      isLoading.value = false
    }, 200)
  })
})
</script>

<template>
  <NuxtLoadingIndicator />
  <header>
    <MenubarCompo />
  </header>
  <div class="main">
    <LoadingSpinner v-if="isLoading" />
    <NuxtPage />
    <slot />
  </div>
  <div class="footer">
    <FooterPage />
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400 !important; /* Regular */
}
h1 {
  font-family: 'Corn', sans-serif;
  font-weight: 400 !important; /* Regular */
}
h2 {
  font-family: 'Quattrocento', sans-serif;
  font-weight: 400 !important; /* Regular */
  font-size: xx-large !important;
}
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300 !important; /* Light */
  text-transform: uppercase;
}
h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600 !important; /* SemiBold */
  font-size: larger !important;
}
.main {
  flex: 1;
  margin-top: 64px;
  // desktop : header is 64px and footer is 68px
  min-height: calc(100vh - 132px);
  // mobile : header is 64px and footer is 172px
  @media (max-width: 600px) {
    flex: 1;
    min-height: calc(100vh - 236px);
  }
}
.footer {
  height: auto;
}
.p-toast {
  max-width: 90vw !important;
  max-height: 90vh !important;
  word-wrap: break-word !important;
  overflow: hidden !important;
}
</style>
