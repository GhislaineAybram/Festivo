<script setup lang="ts">
/**
 * @file pages/index.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Homepage showcasing:
 * - Hosted celebrations list (created by the user)
 * - Celebrations list for which the user is invited
 *
 * @route /
 * @auth public
 */

import type {
  CelebrationsByAuthorResponse,
  CelebrationsByGuestResponse,
  User,
} from '~/types'

const { auth } = useSupabaseClient()
const runtimeConfig = useRuntimeConfig()

// Reactive state for user and celebrations
const user = ref<User | null>(null)
const celebrationsByAuthor = ref<CelebrationsByAuthorResponse | null>(null)
const celebrationsByGuest = ref<CelebrationsByGuestResponse | null>(null)

/**
 * Fetches the authenticated user and celebrations if logged in.
 */
onMounted(async () => {
  const { data } = await auth.getUser()
  user.value = data.user

  if (user.value) {
    await fetchCelebrations()
  }
})

/**
 * Fetches celebrations for both created and invited events.
 * - Retrieves celebrations created by the user.
 * - Retrieves celebrations where the user is a guest.
 */
const fetchCelebrations = async () => {
  if (!user.value) return

  const { data: authorData, error: authorError } = await useFetch<CelebrationsByAuthorResponse>(
    `${runtimeConfig.public.apiUrl}/celebrations/author/${user.value.id}`,
  )
  if (authorError.value) console.error('Failed to fetch celebrations by author', authorError.value)
  celebrationsByAuthor.value = authorData.value

  const { data: guestData, error: guestError } = await useFetch<CelebrationsByGuestResponse>(
    `${runtimeConfig.public.apiUrl}/celebrations/guest/${user.value.id}`,
  )
  if (guestError.value) console.error('Failed to fetch celebrations by guest', guestError.value)
  celebrationsByGuest.value = guestData.value
}

/**
 * Extracts upcoming and past celebrations for the user.
 * Ensures data integrity even if API response is incomplete or erroneous.
 */
const celebrationsListByAuthor = computed(() => ({
  upcoming: celebrationsByAuthor.value?.upcoming ?? [],
  past: celebrationsByAuthor.value?.past ?? [],
}))

const celebrationsListByGuest = computed(() => ({
  upcoming: celebrationsByGuest.value?.upcoming ?? [],
  past: celebrationsByGuest.value?.past ?? [],
}))

// Computed properties for easier template access
const upcomingCelebrationsCreated = computed(() => celebrationsListByAuthor.value.upcoming)
const pastCelebrationsCreated = computed(() => celebrationsListByAuthor.value.past)
const upcomingCelebrationsInvited = computed(() => celebrationsListByGuest.value.upcoming)
const pastCelebrationsInvited = computed(() => celebrationsListByGuest.value.past)
</script>

<template>
  <main class="main">
    <div v-if="user">
      <h1
        class="w-full text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:tracking-tight"
      >
        {{ $t("welcome.events") }}
      </h1>
      <!-- upcoming celebrations created -->
      <div class="celebrations-gallery">
        <CelebrationCard
          :celebrations="upcomingCelebrationsCreated"
          :user-id="user.id"
        />
      </div>
      <!-- past celebrations created -->
      <div class="celebrations-gallery">
        <CelebrationCardPast :celebrations="pastCelebrationsCreated" />
      </div>
      <h1
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight"
      >
        {{ $t("welcome.invitations") }}
      </h1>
      <!-- upcoming invitations -->
      <div class="celebrations-gallery">
        <CelebrationCard :celebrations="upcomingCelebrationsInvited" />
      </div>
      <!-- past invitations -->
      <div class="celebrations-gallery">
        <CelebrationCardPast :celebrations="pastCelebrationsInvited" />
      </div>
    </div>

    <div v-else>
      <h1
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight"
      >
        {{ $t("welcome.not_logged") }}
      </h1>
      <div class="flex justify-center min-h-screen">
        <NuxtLink to="login">
          <button
            type="button"
            class="mt-8 min-w-32 mt-3 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 hover:bg-gray-50"
          >
            {{ $t("button.login") }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h2 {
  background-color: $seashell;
  color: $indigo;
  width: 100%;
  height: 75px;
  align-content: center;
  text-align: center;
}
h1 {
  background-color: $haze;
  color: $indigo;
  width: 100%;
  height: 50px;
  align-content: center;
  text-align: center;
}
.celebrations-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;
  align-items: center;
}
</style>
