<script setup lang="ts"></script>

<template>
  <main class="main">
    <div class="privacy">
      <h1 class="text-2xl font-bold mb-12">
        {{ $t("privacy.title") }}
      </h1>
      <p
        id="updated"
        class="mb-4 text-sm"
      >
        {{ $t("privacy.version", { edited: '03/12/2024', updated: '03/12/2024' }) }}
      </p>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_1.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("privacy.article_1.text_1", { website: 'Festivo' }) }}
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("privacy.article_1.text_2") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_1.text_3") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_1.text_4") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_1.text_5") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_1.text_6") }}
        </li>
      </ul>
      <p class="mb-4">
        <i18n-t keypath="privacy.article_1.text_7">
          <a href="https://festivo-tawny.vercel.app/legal"><NuxtLink to="/legal">https://festivo-tawny.vercel.app/legal</NuxtLink></a>
        </i18n-t>
      </p>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_2.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("privacy.article_2.text_1") }}
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("privacy.article_2.text_2") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_2.text_3") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_2.text_4") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_2.text_5") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_2.text_6") }}
        </li>
      </ul>
      <p class="mb-4">
        {{ $t("privacy.article_2.text_7") }}
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("privacy.article_2.text_8") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_2.text_9") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_2.text_10") }}
        </li>
      </ul>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_3.title") }}
      </h3>

      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_3.subarticle_1.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_3.subarticle_1.text_1") }}
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("privacy.article_3.subarticle_1.text_2") }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_3.subarticle_1.text_3") }}
        </li>
      </ul>
      <p class="mb-4">
        {{ $t("privacy.article_3.subarticle_1.text_4") }}
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("privacy.article_3.subarticle_1.text_5", { website: 'Festivo' }) }}
        </li>
        <li class="mb-2">
          {{ $t("privacy.article_3.subarticle_1.text_6") }}
        </li>
      </ul>

      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_3.subarticle_2.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_3.subarticle_2.text_1") }}
      </p>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">
          {{ $t("privacy.article_3.subarticle_2.text_2") }}
        </li>
      </ul>
      <p class="mb-4">
        {{ $t("privacy.article_3.subarticle_2.text_3", { nb: '3' }) }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_3.subarticle_2.text_4") }}
      </p>

      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_3.subarticle_3.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_3.subarticle_3.text_1") }}
      </p>
      <ul class="list-inside mb-4">
        <li class="mb-2">
          Supabase Inc.
        </li>
        <li class="mb-2">
          970 Toa Payoh N
        </li>
        <li class="mb-2">
          #07-04
        </li>
        <li class="mb-2">
          Singapore
        </li>
        <li class="mb-2">
          support@supabase.com
        </li>
      </ul>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_4.title") }}
      </h3>

      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_4.subarticle_1.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_1.text_1", { website: 'Festivo' }) }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_1.text_2") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_1.text_3", { email: 'g.aybram.festivo@gmail.com' }) }}
      </p>

      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_4.subarticle_2.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_2.text_1") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_2.text_2") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_2.text_3") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_4.subarticle_2.text_4") }}
      </p>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("privacy.article_5.text_1") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_5.text_2") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_5.text_3", { nb: '30' }) }}
      </p>
      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.subarticle_1.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_1.text_1") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_1.text_2") }}
      </p>
      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.subarticle_2.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_2.text_1") }}
      </p>
      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.subarticle_3.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_3.text_1") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_3.text_2") }}
      </p>
      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.subarticle_4.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_4.text_1") }}
      </p>
      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.subarticle_5.title") }}
      </h4>
      <p class="mb-4">
        {{ $t("privacy.article_5.subarticle_5.text_1") }}
      </p>
      <h4 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_5.subarticle_6.title") }}
      </h4>
      <p class="mb-4">
        <i18n-t keypath="privacy.article_5.subarticle_6.text_1">
          <a href="https://www.cnil.fr/">https://www.cnil.fr</a>
        </i18n-t>
      </p>

      <h3 class="text-xl font-bold mb-2">
        {{ $t("privacy.article_6.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("privacy.article_6.text_1", { website: 'Festivo' }) }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_6.text_2") }}
      </p>
      <p class="mb-4">
        {{ $t("privacy.article_6.text_3") }}
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
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
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}
a {
  color: $indigo;
  text-decoration: underline;
  text-decoration-color: $indigo;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}
a:hover {
  color: $grey;
  text-decoration-color: $grey;
}
#updated {
  text-align: right;
}
.privacy {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>
