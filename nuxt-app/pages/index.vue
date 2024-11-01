<script setup lang="ts">
import { getDay, getMonth } from '~/components/CelebrationCard.vue'
import type { Celebration } from '~/types'

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

async function fetchCelebrations(url: string, errorMessage: string) {
  const { data, error } = await useFetch<Celebration[]>(() => url)

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

const upcomingCelebrationsCreated = await fetchCelebrations(
  `${runtimeConfig.public.apiUrl}/celebrations/upcoming/author/${user.id}`,
  'Failed to fetch upcoming created celebrations data',
)

const upcomingCelebrationsInvited = await fetchCelebrations(
  `${runtimeConfig.public.apiUrl}/celebrations/upcoming/guest/${user.id}`,
  'Failed to fetch upcoming celebrations invitations data',
)

const pastCelebrationsCreated = await fetchCelebrations(
  `${runtimeConfig.public.apiUrl}/celebrations/past/author/${user.id}`,
  'Failed to fetch past created celebrations data',
)

const pastCelebrationsInvited = await fetchCelebrations(
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
      <CelebrationCard :celebrations="upcomingCelebrationsCreated" />

      <!-- past celebrations created -->
      <CelebrationCardPast :celebrations="pastCelebrationsCreated" />

      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        {{ $t("welcome.invitations") }}
      </h2>
      <!-- upcoming invitations -->
      <CelebrationCard :celebrations="upcomingCelebrationsInvited" />

      <!-- past invitations -->
      <CelebrationCardPast :celebrations="pastCelebrationsInvited" />
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

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .main {
    margin-top: 59px;
  }
}
</style>
