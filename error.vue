<script setup lang="ts">
/**
 * @file error.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Error page in Nuxt application.
 */

import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <MenubarCompo />
  <main
    class="flex flex-col justify-center min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600 sm:text-3xl">
        {{ error?.statusCode }}
      </p>
      <h1
        class="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {{ $t("error.page") }}
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        {{ $t("error.information") }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >{{ $t("error.back") }}</a>
        <a
          href="#"
          class="text-sm font-semibold text-gray-900"
        >{{ $t("error.contact") }} <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
  <FooterPage id="footer" />
</template>

<style lang="scss" scoped>
.main {
  margin-top: 59px;
  padding: auto;
}
#footer {
  position: absolute;
  bottom: 0;
}
</style>
