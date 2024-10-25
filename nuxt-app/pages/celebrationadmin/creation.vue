<script setup lang="ts">
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

definePageMeta({
  middleware: 'auth',
})

const { auth } = useSupabaseClient()
const {
  data: { user },
} = await auth.getUser()

const celebrationTitle = ref('')
const celebrationType = ref('')
const celebrationDescription = ref('')
const celebrationDate = ref()
const celebrationTime = ref()
const celebrationAddress = ref('')
const agreed = ref(false)
const creationSuccess = ref(false)

const createNewCelebration = async () => {
  if (!agreed.value) {
    alert('Vous devez accepter les termes et conditions.')
    return
  }
  if (!user?.id) {
    alert('Utilisateur non identifié.')
    return
  }
  try {
    const { error } = await $fetch('/api/celebration', {
      method: 'POST',
      body: {
        title: celebrationTitle.value,
        type: celebrationType.value,
        description: celebrationDescription.value,
        date: celebrationDate.value,
        time: celebrationTime.value,
        address: celebrationAddress.value,
        author: user.id,
      },
    })

    if (error) {
      console.error('Erreur lors de la création de l’événement :', error.value)
      return
    }

    // Clear form
    celebrationTitle.value = ''
    celebrationType.value = ''
    celebrationDescription.value = ''
    celebrationDate.value = null
    celebrationTime.value = null
    celebrationAddress.value = ''

    creationSuccess.value = true
    alert('Événement créé avec succès!')
  }
  catch (error) {
    console.error('Erreur lors de la création de l’événement :', error)
  }
}
</script>

<template>
  <main class="main flex flex-col items-center">
    <div
      v-if="user"
      id="celebration-details"
    >
      <div class="mx-auto mt-6 max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t("celebration.creation-title") }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          {{ $t("celebration.creation-subtitle") }}
        </p>
      </div>
      <form
        method="POST"
        class="mx-auto mt-10 max-w-xl sm:mt-20"
        @submit.prevent="createNewCelebration"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="celebration-title"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >{{ $t("celebration.title") }}</label>
            <div class="mt-2.5">
              <input
                id="celebration-title"
                v-model="celebrationTitle"
                type="text"
                name="celebration-title"
                autocomplete="celebration-title"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>
          <div>
            <label
              for="celebration-type"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >{{ $t("celebration.type") }}</label>
            <div class="mt-2.5">
              <select
                id="celebration-type"
                v-model="celebrationType"
                name="celebration-type"
                autocomplete="celebration-type"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Anniversary</option>
                <option>Baby shower</option>
                <option>New Year</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="celebration-description"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >{{ $t("celebration.description") }}</label>
            <div class="mt-2.5">
              <textarea
                id="celebration-description"
                v-model="celebrationDescription"
                name="celebration-description"
                rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="celebration-date"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >{{ $t("celebration.date") }}</label>
            <div class="mt-2.5">
              <DatePicker
                id="datepicker-month"
                v-model="celebrationDate"
                class="flex-auto"
                date-format="dd/mm/yy"
                variant="filled"
                show-icon
                fluid
                :show-on-focus="false"
                input-id="buttondisplay"
              />
            </div>
          </div>
          <div>
            <label
              for="celebration-hour"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >{{ $t("celebration.hour") }}</label>
            <div class="mt-2.5">
              <DatePicker
                id="datepicker-timeonly"
                v-model="celebrationTime"
                time-only
                fluid
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="celebration-address"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >{{ $t("celebration.address") }}</label>
            <div class="mt-2.5">
              <input
                id="celebration-address"
                v-model="celebrationAddress"
                type="text"
                name="celebration-address"
                autocomplete="celebration-address"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>

          <SwitchGroup
            as="div"
            class="flex gap-x-4 sm:col-span-2"
          >
            <div class="flex h-6 items-center">
              <Switch
                v-model="agreed"
                :class="[
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                ]"
              >
                <span class="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  :class="[
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                  ]"
                />
              </Switch>
            </div>
            <SwitchLabel class="text-sm leading-6 text-gray-600">
              {{ $t("celebration.accept-privacy") }}
              <NuxtLink to="/privacy">
                <div class="font-semibold text-indigo-600">
                  {{ $t("celebration.privacy-policy") }}</div>
              </NuxtLink>
            </SwitchLabel>
          </SwitchGroup>
        </div>
        <div class="mt-10">
          <button
            id="celebration-creation"
            type="submit"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {{ $t("celebration.creation-button") }}
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      <AlertNotLoggedIn />
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
#celebration-details {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
  width: 80%;
}
#celebration-creation {
  background-color: $tangerine;
  color: $indigo;
}
input, select, option, textarea,
#datepicker-timeonly *,
#datepicker-month * {
  background-color: white !important;
}
@media (min-width: 1024px) {
  #celebration-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 424px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 100%;
  }
}
@media (max-width: 600px) {
  #celebration-details {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
