<script setup lang="ts">
import IconGitHub from './icons/IconGitHub.vue'
</script>

<template>
  <footer
    id="footer"
    class="w-full z-10 font-body bottom-0 bg-gray-700 text-gray-200 flex flex-col"
  >
    <div class="bg-gray-800 bottom-0 right-0 left-0">
      <div
        class="flex mx-auto items-center justify-between flex-wrap p-4 md:px-6 max-w-7xl"
      >
        <span>
          <NuxtLink
            to="/legal"
            class="text-gray-400 hover:text-white mx-2"
          >
            {{ $t("footer.legal") }}
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="text-gray-400 hover:text-white mx-2"
          >
            {{ $t("footer.privacy") }}
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-400 hover:text-white mx-2"
          >
            {{ $t("footer.about") }}
          </NuxtLink>
        </span>
        <a
          class="text-gray-100"
          href="/"
        > &#169; festify.com </a>
        <span class="flex items-center flex-no-shrink">
          <IconGitHub class="h-6 w-6 text-gray-100 mr-2" />
          <span class="mr-1"> v1</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  display: flex;
  position: relative;
  bottom: 0;
}
</style>
