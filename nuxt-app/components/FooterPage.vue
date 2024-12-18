<script setup lang="ts">
import IconGitHub from './icons/IconGitHub.vue'
</script>

<template>
  <footer
    id="footer"
    class="w-full z-10 font-body text-gray-200 flex flex-col"
  >
    <div class="bg-gray-800">
      <div
        class="flex flex-col md:flex-row mx-auto items-center justify-between p-4 md:px-6 max-w-7xl"
      >
        <span class="flex flex-col items-center md:flex-row md:space-x-4">
          <NuxtLink
            to="/about"
            :class="[
              'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
            ]"
          >
            {{ $t("footer.about") }}
          </NuxtLink>
          <NuxtLink
            to="/legal"
            :class="[
              'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
            ]"
          >
            {{ $t("footer.legal") }}
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            :class="[
              'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
            ]"
          >
            {{ $t("footer.privacy") }}
          </NuxtLink>
        </span>
        <div class="flex justify-between w-full md:w-auto mt-2 md:space-x-4">
          <span class="text-gray-300 text-sm font-medium">
            &#169; festivo-tawny.vercel.app
          </span>
          <span class="flex items-center text-gray-300 text-sm font-medium">
            <IconGitHub class="h-6 w-6 text-gray-300 mr-2" />
            <span class="mr-1"> v 1.0.0</span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#footer {
  display: flex;
  position: relative;
  bottom: 0;
}
</style>
