<script setup lang="ts">
import IconGitHub from './icons/IconGitHub.vue'
</script>

<template>
  <footer
    id="footer"
    class="w-full z-10 font-body bg-gray-700 text-gray-200 flex flex-col"
  >
    <div class="bg-gray-800">
      <div
        class="flex flex-col md:flex-row mx-auto items-center justify-between p-4 md:px-6 max-w-7xl"
      >
        <span class="flex flex-col items-center md:flex-row md:space-x-4">
          <NuxtLink
            to="/legal"
            class="text-gray-400 hover:text-white my-1"
          >
            {{ $t("footer.legal") }}
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="text-gray-400 hover:text-white my-1"
          >
            {{ $t("footer.privacy") }}
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-400 hover:text-white my-1"
          >
            {{ $t("footer.about") }}
          </NuxtLink>
        </span>
        <div class="flex justify-between w-full md:w-auto mt-2 md:space-x-4">
          <span class="text-gray-100">
            &#169; festify.com
          </span>
          <span class="flex items-center">
            <IconGitHub class="h-6 w-6 text-gray-100 mr-2" />
            <span class="mr-1"> v1.0.0</span>
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
