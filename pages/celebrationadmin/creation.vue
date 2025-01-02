<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: 'auth',
})

const { auth } = useSupabaseClient()
const { data: { user } } = await auth.getUser()

const celebrationTitle = ref('')
const celebrationType = ref('')
const celebrationDescription = ref('')
const celebrationDate = ref<Date | null>(null)
const celebrationTime = ref()
const celebrationAddress = ref('')
const creationSuccess = ref(false)
const errorMsg = ref('')

async function createNewCelebration() {
  // all the fields must be filled
  if (
    !celebrationTitle.value.trim()
    || !celebrationType.value
    || !celebrationDescription.value.trim()
    || !celebrationDate.value
    || !celebrationTime.value
    || !celebrationAddress.value.trim()
  ) {
    errorMsg.value = 'Tous les champs sont obligatoires.'
    return
  }

  const formattedDate = celebrationDate.value ? formatDate(celebrationDate.value) : null
  const formattedTime = celebrationTime.value ? formatTime(celebrationTime.value) : null

  errorMsg.value = ''

  const response = await $fetch('/api/celebration', {
    method: 'POST',
    body: {
      name: celebrationTitle.value,
      celebration_type: celebrationType.value,
      description: celebrationDescription.value,
      date: formattedDate,
      hour: formattedTime,
      address: celebrationAddress.value,
      author: user!.id,
    },
  }) as { error?: string }
  alert(formattedDate)
  if (response.error) {
    errorMsg.value = `Erreur lors de la création de l’événement : ${response.error}`
    console.error('Erreur lors de la création de l’événement :', response.error)
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
}
</script>

<template>
  <main class="main flex flex-col items-center">
    <div
      v-if="user"
      id="celebration-details"
    >
      <div class="mx-auto mt-4 max-w-2xl text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {{ $t("celebration.creation-title") }}
        </h1>
      </div>
      <form
        method="POST"
        class="mx-auto mt-10 max-w-xl sm:mt-10"
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
                <option
                  value=""
                  disabled
                >
                  Choisissez un type
                </option>
                <option value="d016615d-6ca8-42a9-9abb-54a35a3234df">
                  Anniversary
                </option>
                <option value="3d41671f-6103-480f-b3ae-16191fb1bd11">
                  Baby shower
                </option>
                <option value="1bbb698b-6276-4e1f-91a0-544e045fca71">
                  New Year
                </option>
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
        </div>
        <div class="mt-10">
          <span
            v-if="errorMsg"
            class="text-sm text-red-500"
          >{{ errorMsg }}</span>
          <button
            id="celebration-creation"
            type="submit"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {{ $t("celebration.creation-button") }}
          </button>
        </div>
      </form>
      <AlertCelebrationCreation
        v-if="creationSuccess"
        class="alert"
      />
    </div>
    <div v-else>
      <AlertNotLoggedIn class="alert" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h1 {
  color: $indigo;
}
#celebration-details {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
  width: 95%;
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
#celebration-type {
  height: 40px;
}
</style>
