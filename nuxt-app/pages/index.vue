<script setup lang="ts">
import { getDay, getMonth } from '~/components/CelebrationCard.vue'
import type { CelebrationWithGuestsAndType, CelebrationWithPictureAndAuthor } from '~/types'

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

async function fetchCelebrationsByAuthor(url: string, errorMessage: string) {
  const { data, error } = await useFetch<CelebrationWithPictureAndAuthor[]>(() => url)

  if (error.value) {
    console.error(errorMessage, error.value)
  }

  return computed(() =>
    data.value?.map(celebration => ({
      ...celebration,
      dateMonth: getMonth(celebration.date),
      dateDay: getDay(celebration.date),
    })) || [],
  )
}

async function fetchCelebrationsByUser(url: string, errorMessage: string) {
  const { data, error } = await useFetch<CelebrationWithGuestsAndType[]>(() => url)

  if (error.value) {
    console.error(errorMessage, error.value)
  }

  return computed(() =>
    data.value?.map(celebration => ({
      ...celebration,
      dateMonth: getMonth(celebration.date),
      dateDay: getDay(celebration.date),
    })) || [],
  )
}

const upcomingCelebrationsCreated = await fetchCelebrationsByAuthor(
  `${runtimeConfig.public.apiUrl}/celebrations/upcoming/author/${user.id}`,
  'Failed to fetch upcoming created celebrations data',
)

const upcomingCelebrationsInvited = await fetchCelebrationsByUser(
  `${runtimeConfig.public.apiUrl}/celebrations/upcoming/guest/${user.id}`,
  'Failed to fetch upcoming celebrations invitations data',
)

const pastCelebrationsCreated = await fetchCelebrationsByAuthor(
  `${runtimeConfig.public.apiUrl}/celebrations/past/author/${user.id}`,
  'Failed to fetch past created celebrations data',
)

const pastCelebrationsInvited = await fetchCelebrationsByUser(
  `${runtimeConfig.public.apiUrl}/celebrations/past/guest/${user.id}`,
  'Failed to fetch past celebrations invitations data',
)
</script>

<template>
  <main class="main">
    <div v-if="user">
      <h1
        class="w-full text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight"
      >
        {{ $t("welcome.title") }} {{ firstname }} !
      </h1>
      <h2
        class="w-full text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight"
      >
        {{ $t("welcome.events") }}
      </h2>
      <!-- upcoming celebrations created -->
      <div class="celebrations-gallery">
        <CelebrationCard :celebrations="upcomingCelebrationsCreated" />
      </div>
      <!-- past celebrations created -->
      <div class="celebrations-gallery">
        <CelebrationCardPast :celebrations="pastCelebrationsCreated" />
      </div>
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        {{ $t("welcome.invitations") }}
      </h2>
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
h1 {
  background-color: $seashell;
  color: $indigo;
  width: 100%;
  height: 75px;
  align-content: center;
  text-align: center;
}
h2 {
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
