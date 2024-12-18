<script setup lang="ts">
</script>

<template>
  <main class="main">
    <div class="about">
      <h1 class="text-3xl font-bold mb-12">
        {{ $t("about.title") }}
      </h1>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("about.history.title", { website: 'Festivo' }) }}
      </h3>
      <p class="mb-4">
        {{ $t("about.history.text_1") }}
      </p>
      <p class="mb-4">
        {{ $t("about.history.text_2") }}
      </p>
      <p class="mb-4">
        {{ $t("about.history.text_3", { website: 'Festivo' }) }}
      </p>
      <p class="mb-4">
        {{ $t("about.history.text_4", { website: 'Festivo' }) }}
      </p>

      <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white text-center">
        <svg
          class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <div class="relative z-10">
          <h4 class="text-gray-800 sm:text-xl dark:text-white">
            <em>
              {{ $t("about.quote.text_1") }}
            </em>
          </h4>
          <h4 class="text-gray-800 sm:text-xl dark:text-white">
            <em>
              {{ $t("about.quote.text_2", { website: 'Festivo' }) }}
            </em>
          </h4>
        </div>
        <svg
          class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 ml-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
      </blockquote>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("about.values.title") }}
      </h3>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("about.values.text_1") }}
        </li>
        <li class="mb-2">
          {{ $t("about.values.text_2") }}
        </li>
        <li class="mb-2">
          {{ $t("about.values.text_3", { website: 'Festivo' }) }}
        </li>
      </ul>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("about.after.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("about.after.text_1", { website: 'Festivo' }) }}
      </p>
      <p class="mb-4">
        {{ $t("about.after.text_2") }}
      </p>
      <p class="mb-4">
        {{ $t("about.after.text_3") }}
      </p>

      <img
        class="mx-auto h-36 w-auto"
        src="../public/img/logo-vertical-Festivo-indigo.png"
        alt="Logo Festivo"
      >
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
.about {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
h1 {
  color: $indigo;
  align-content: center;
  text-align: center;
}
h3 {
  color: $indigo;
  text-decoration: underline;
  text-decoration-color: $tangerine;
  text-decoration-thickness: 6px;
  text-underline-offset: 6px;
  text-decoration-skip-ink: none;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}
h4 {
  color: $indigo;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}
</style>
