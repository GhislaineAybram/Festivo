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
:global(.alert) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
// ne fonctionne pas
:global(.button-validation-form) {
  background-color: $tangerine !important;
  color: $indigo !important;
  border-color: $indigo !important;
}
:global(.button-validation-form:hover) {
  background-color: $seashell !important;
  color: $indigo !important;
  border-color: $indigo !important;
}
:global(.button-info) {
  background-color: $indigo;
  color: $haze;
  border-color: $haze;
}
:global(.button-info:hover) {
  background-color: $haze;
  color: $indigo;
  border-color: $indigo;
}
:global(.button-cancel) {
  background-color: $haze;
  color: $indigo;
  border-color: $indigo;
}
:global(.button-cancel:hover) {
  background-color: $indigo;
  color: $haze;
  border-color: $haze;
}
</style>
