<script setup lang="ts">
import type { Celebration } from '~/types'

const { auth } = useSupabaseClient()
const { data: { user } } = await auth.getUser()
const metadata = user?.user_metadata

const firstname = computed(() => metadata?.firstname || '')

watchEffect(() => {
  if (!user) {
    return navigateTo('/login')
  }
})

definePageMeta({
  middleware: 'auth',
})

const runtimeConfig = useRuntimeConfig()
const { data: celebration, error } = await useFetch<Celebration>(() => `${runtimeConfig.public.apiUrl}/celebration/6597f938-9e05-4015-b62b-4468d042869e`)
const { data: celebration2 } = await useFetch<Celebration>(() => `${runtimeConfig.public.apiUrl}/celebration/bc5abc08-c022-4117-88bd-f5abdcf1300d`)

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

const dateMonth = computed(() => celebration.value ? getMonth(celebration.value.date) : '')
const dateDay = computed(() => celebration.value ? getDay(celebration.value.date) : '')

const dateMonth2 = computed(() => celebration2.value ? getMonth(celebration2.value.date) : '')
const dateDay2 = computed(() => celebration2.value ? getDay(celebration2.value.date) : '')
</script>

<template>
  <main class="main">
    <div v-if="user">
      <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Bienvenue {{ firstname }} !
      </h1>
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Voici vos événements
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-1">
        <div class="parent">
          <div class="card">
            <div class="card-image" />
            <div class="category">
              {{ celebration?.name }}
            </div>
            <div class="date-box">
              <span class="date">{{ dateDay }}</span>
              <span class="month">{{ dateMonth }}</span>
            </div>
            <div class="heading">
              {{ celebration?.description }}
            </div>
            <a
              class="action"
              :href="`/celebration/${celebration?.id}`"
            >
              Go to the event page
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="parent">
          <div class="card">
            <div class="card-image" />
            <div class="category">
              {{ celebration2?.name }}
            </div>
            <div class="date-box">
              <span class="date">{{ dateDay2 }}</span>
              <span class="month">{{ dateMonth2 }}</span>
            </div>
            <div class="heading">
              {{ celebration2?.description }}
            </div>
            <a
              class="action"
              :href="`/celebration/${celebration2?.id}`"
            >
              Go to the event page
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Voici vos invitations
      </h2>
    </div>

    <div v-else>
      <h1>Not logged in</h1>
      <NuxtLink to="login">
        <Button
          label="Login with password"
          class="mt-2 button-validation"
        />
      </NuxtLink>
    </div>
  </main>
</template>

<style  lang="scss" scoped>
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
  flex-wrap: wrap; /* Permet aux cartes de passer à la ligne si l'écran est trop petit */
  gap: 1rem; /* Espace entre les cartes */
  justify-content: center; /* Centrer les cartes */
  padding: 35px;
}

.card {
  position: relative; /* Nécessaire pour positionner la date-box */
  flex: 1 1 calc(100% - 2rem); /* Prend toute la largeur avec marge pour petits écrans */
  max-width: 260px; /* Largeur max pour écrans plus larges */
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
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: $grey;
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.date-box {
  position: absolute;
  top: -20px; /* Fait dépasser la boîte de la carte */
  right: -20px; /* Décale la boîte vers l'extérieur de la carte */
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
  color: #180161;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: $tangerine;
  padding: 4px 8px;
  border-radius: 4px;
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
