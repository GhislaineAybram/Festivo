<script setup lang="ts">
/**
 * @file app.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Main component of Nuxt application.
 */

const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>

<template>
  <header>
    <MenubarCompo />
  </header>
  <div class="main">
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    />
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
// bloque les alert
// .alert {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }
.p-toast {
  max-width: 90vw !important;
  max-height: 90vh !important;
  word-wrap: break-word !important;
  overflow: hidden !important;
}
</style>
