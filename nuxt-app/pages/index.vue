<script setup lang="ts">
import type { CelebrationsByAuthorResponse, CelebrationsByGuestResponse } from '~/types'

const { auth } = useSupabaseClient()
const {
  data: { user },
} = await auth.getUser()
const metadata = user?.user_metadata

const firstname = computed(() => metadata?.firstname || '')

watchEffect(() => {
  if (!user) {
    return navigateTo('/login')
  }
})

const runtimeConfig = useRuntimeConfig()

// celebrations list by author
const { data: celebrationsByAuthor, error: celebrationsByAuthorError } = await useFetch<CelebrationsByAuthorResponse>(
  () => `${runtimeConfig.public.apiUrl}/celebrations/author/${user!.id}`,
)
if (celebrationsByAuthorError.value) {
  console.error('Failed to fetch celebrations by author', celebrationsByAuthorError.value)
}

// celebrations list by guest
const { data: celebrationsByGuest, error: celebrationsByGuestError } = await useFetch<CelebrationsByGuestResponse>(
  () => `${runtimeConfig.public.apiUrl}/celebrations/guest/${user!.id}`,
)
if (celebrationsByGuestError.value) {
  console.error('Failed to fetch celebrations by guest', celebrationsByGuestError.value)
}

const celebrationsListByAuthor = computed(() => {
  if (celebrationsByAuthor.value && 'upcoming' in celebrationsByAuthor.value) {
    return {
      upcoming: celebrationsByAuthor.value?.upcoming ?? [],
      past: celebrationsByAuthor.value?.past ?? [],
    }
  }
  return { upcoming: [], past: [] } // Valeurs par défaut en cas d'erreur
})

const celebrationsListByGuest = computed(() => {
  if (celebrationsByGuest.value && 'upcoming' in celebrationsByGuest.value) {
    return {
      upcoming: celebrationsByGuest.value.upcoming ?? [],
      past: celebrationsByGuest.value.past ?? [],
    }
  }
  return { upcoming: [], past: [] } // Valeurs par défaut en cas d'erreur
})

const upcomingCelebrationsCreated = computed(() => celebrationsListByAuthor.value.upcoming)
const pastCelebrationsCreated = computed(() => celebrationsListByAuthor.value.past)
const upcomingCelebrationsInvited = computed(() => celebrationsListByGuest.value.upcoming)
const pastCelebrationsInvited = computed(() => celebrationsListByGuest.value.past)
</script>

<template>
  <main class="main">
    <div v-if="user">
      <h2
        class="w-full text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight"
      >
        {{ $t("welcome.title") }} {{ firstname }} !
      </h2>
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
      <h1>{{ $t("welcome.not_logged") }}</h1>
      <NuxtLink to="login">
        <Button
          label="Login with password"
          class="mt-2 button-validation"
        />
      </NuxtLink>
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
  background-color: $tangerine;
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
