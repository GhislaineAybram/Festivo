<script setup lang="ts">
/**
 * @file pages/legal.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Legal terms and conditions page including:
 * - Terms of service
 * - User agreements
 * - Copyright information
 * - Liability disclaimers
 * - Dispute resolution
 *
 * @route /legal
 * @auth public
 */
</script>

<template>
  <main class="main">
    <div class="legal">
      <h1 class="text-3xl font-bold mb-12">
        {{ $t("legal.title") }}
      </h1>
      <p class="mb-4">
        <i18n-t keypath="legal.introduction.text">
          <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164">
            {{ $t('legal.introduction.link_text') }}
          </a>
        </i18n-t>
      </p>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("legal.edition.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("legal.edition.text_1", { url: 'https://festivo-tawny.vercel.app' }) }}
      </p>
      <p class="mb-4">
        {{ $t("legal.edition.text_2", { director: 'Ghislaine AYBRAM', address: '1 avenue Victor Hugo 92190 MEUDON' }) }}
      </p>
      <p class="mb-4">
        {{ $t("legal.edition.text_3", { director: 'Ghislaine AYBRAM' }) }}
      </p>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("legal.hosting.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("legal.hosting.text") }}
      </p>
      <ul class="list-inside mb-4">
        <li class="mb-2">
          Vercel Inc.
        </li>
        <li class="mb-2">
          440 N Barranca Avenue #4133
        </li>
        <li class="mb-2">
          Covina, CA 91723
        </li>
        <li class="mb-2">
          United States
        </li>
        <li class="mb-2">
          +1 559-288-7060
        </li>
      </ul>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("legal.properties.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("legal.properties.text_1", { director: 'Ghislaine AYBRAM' }) }}
      </p>
      <p class="mb-4">
        <i18n-t keypath="legal.properties.text_2.text">
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082">
            {{ $t('legal.properties.text_2.link_text') }}
          </a>
        </i18n-t>
      </p>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("legal.contact.title") }}
      </h3>
      <ul class="list-inside mb-4">
        <li class="mb-2">
          {{ $t('legal.contact.text_1', { phone: '+336 80 78 52 38' }) }}
        </li>
        <li class="mb-2">
          {{ $t('legal.contact.text_2', { email: 'g.aybram.festivo@gmail.com' }) }}
        </li>
        <li class="mb-2">
          {{ $t('legal.contact.text_3', { address: '1 avenue Victor Hugo 92190 MEUDON' }) }}
        </li>
      </ul>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("legal.privacy.title") }}
      </h3>
      <p class="mb-4">
        <i18n-t keypath="legal.privacy.text_1.text">
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000886460/LEGISCTA000037804929/">
            {{ $t('legal.privacy.text_1.link_text') }}
          </a>
        </i18n-t>
      </p>
      <p class="mb-4">
        <i18n-t keypath="legal.privacy.text_2.text">
          <a href="https://festivo-tawny.vercel.app/privacy"><NuxtLink to="/privacy">
            {{ $t('legal.privacy.text_2.link_text') }}</NuxtLink>
          </a>
        </i18n-t>
      </p>
      <h3 class="text-xl font-bold mb-2">
        {{ $t("legal.jurisdiction.title") }}
      </h3>
      <p class="mb-4">
        {{ $t("legal.jurisdiction.text", { url: 'https://festivo-tawny.vercel.app' }) }}
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
.legal {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>
