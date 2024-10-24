<script setup lang="ts">
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
const { data: celebrationCreated, error } = await useFetch<Celebration[]>(
  () => `${runtimeConfig.public.apiUrl}/celebrations/author/${user.id}`,
)

if (error.value) {
  console.error('Failed to fetch celebration data', error.value)
}

const getMonth = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleString('default', { month: 'long' })
}

const getDay = (dateString: string) => {
  const date = new Date(dateString)
  return date.getDate()
}

const celebrationsCreated = computed(
  () =>
    celebrationCreated.value?.map(celebration => ({
      ...celebration,
      dateMonth: getMonth(celebration.date),
      dateDay: getDay(celebration.date),
    })) || [],
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
      <div
        v-if="celebrationsCreated && celebrationsCreated.length > 0"
        class="grid grid-cols-1 sm:grid-cols-1"
      >
        <div
          v-for="celebration in celebrationsCreated"
          :key="celebration.celebration_id"
          class="parent"
        >
          <div class="card">
            <div class="card-image" />
            <div class="category">
              {{ celebration.name }}
            </div>
            <div class="date-box">
              <span class="date">{{ celebration.dateDay }}</span>
              <span class="month">{{ celebration.dateMonth }}</span>
            </div>
            <div class="heading">
              {{ celebration.description }}
            </div>
            <a
              class="action"
              :href="`/celebration/${celebration.celebration_id}`"
            >
              {{ $t("welcome.event_link") }}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Pas d'événement créé</p>
      </div>
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        {{ $t("welcome.invitations") }}
      </h2>
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
.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 35px;
}

.card {
  position: relative;
  flex: 1 1 calc(100% - 2rem);
  max-width: 260px;
  background: white;
  padding: 0.5em;
  border-radius: 6px;
  border: 1px solid $indigo;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px -10px;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 0 0;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 600;
  color: $indigo;
  padding: 10px 7px 0;
  background-color: white;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: $grey;
  padding: 7px;
  background-color: white;
}

.heading:hover {
  cursor: pointer;
}

.date-box {
  position: absolute;
  top: -20px;
  right: -20px;
  height: 60px;
  width: 60px;
  background: white;
  border: 1px solid $tangerine;
  border-radius: 10px;
  padding: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
}

.date-box span {
  display: block;
  text-align: center;
  background-color: white;
}

.date-box .month {
  color: $indigo;
  font-size: 11px;
  font-weight: 700;
}

.date-box .date {
  font-size: 20px;
  font-weight: 900;
  color: $indigo;
}

.action {
  display: inline-flex;
  margin-top: 1rem;
  color: $indigo;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: $tangerine;
  padding: 4px 8px;
  border-radius: 4px;
}
.action span {
  background-color: $tangerine;
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
