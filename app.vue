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
// action button
.button-action {
  font-size: 0.875rem;
  align-items: center;
  background-color: $indigo !important;
  border: 1.5px solid $indigo;
  border-radius: .375rem;
  box-shadow: #B9B2CF 0 1px 3px 0;
  box-sizing: border-box;
  color: $seashell;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  min-height: 2.2rem;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}
.button-action:hover,
.button-action:focus {
 box-shadow: #B9B2CF 0 4px 12px;
 color: $tangerine;
}
.button-action:hover {
 transform: translateY(-1px);
}
.button-action:active {
 background-color: #2F1A70!important;
 box-shadow: #B9B2CF 0 2px 4px;
 color: $tangerine;
 transform: translateY(0);
}
// validation button
.button-validation {
  font-size: 0.875rem;
 align-items: center;
 background-color: $tangerine !important;
 border: 1.5px solid $indigo;
 border-radius: .375rem;
 box-shadow: #FFC69D 0 1px 3px 0;
 box-sizing: border-box;
 color: $indigo;
 cursor: pointer;
 display: inline-flex;
 justify-content: center;
 min-height: 2.2rem;
 transition: all 250ms;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: baseline;
}
.button-validation:hover,
.button-validation:focus {
 box-shadow: #FFC69D 0 4px 12px;
 color: $indigo;
}
.button-validation:hover {
 transform: translateY(-1px);
}
.button-validation:active {
 background-color: #FF8C37!important;
 border-color: $seashell;
 box-shadow: #FFC69D 0 2px 4px;
 color: $seashell;
 transform: translateY(0);
}
// cancel button
.button-cancel {
  font-size: 0.875rem;
 align-items: center;
 background-color: $haze !important;
 border: 1.5px solid $indigo;
 border-radius: .375rem;
 box-shadow: #B9B2CF 0 1px 3px 0;
 box-sizing: border-box;
 color: $indigo;
 cursor: pointer;
 display: inline-flex;
 justify-content: center;
 min-height: 2.2rem;
 transition: all 250ms;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: baseline;
}
.button-cancel:hover,
.button-cancel:focus {
 box-shadow: #B9B2CF 0 4px 12px;
}
.button-cancel:hover {
 transform: translateY(-1px);
}
.button-cancel:active {
 background-color: #B5ADCB !important;
 box-shadow: #B9B2CF 0 2px 4px;
 transform: translateY(0);
}
// info button
.button-info {
  font-size: 0.875rem;
 align-items: center;
 background-color: $seashell !important;
 border: 1.5px solid $indigo;
 border-radius: .375rem;
 box-shadow: #FFD7BD 0 1px 3px 0;
 box-sizing: border-box;
 color: $indigo;
 cursor: pointer;
 display: inline-flex;
 justify-content: center;
 min-height: 2.2rem;
 transition: all 250ms;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: baseline;
}
.button-info:hover,
.button-info:focus {
 box-shadow: #FFD7BD 0 4px 12px;
}
.button-info:hover {
 transform: translateY(-1px);
}
.button-info:active {
 background-color: #FFD7BD !important;
 box-shadow: #FFD7BD 0 2px 4px;
 transform: translateY(0);
}
// delete button
.button-delete {
  font-size: 0.875rem;
 align-items: center;
 background-color: #fb2c36 !important;
 border: 1.5px solid #fb2c36;
 border-radius: .375rem;
 box-shadow: #fc777e 0 1px 3px 0;
 box-sizing: border-box;
 color: $whisper;
 cursor: pointer;
 display: inline-flex;
 justify-content: center;
 min-height: 2.2rem;
 transition: all 250ms;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: baseline;
}
.button-delete:hover,
.button-delete:focus {
 box-shadow: #fc777e 0 4px 12px;
}
.button-delete:hover {
 transform: translateY(-1px);
}
.button-delete:active {
 background-color: #d6040e !important;
 box-shadow: #fc777e 0 2px 4px;
 transform: translateY(0);
}
</style>
