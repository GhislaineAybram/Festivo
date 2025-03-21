<script setup lang="ts">
/**
 * @file pages/celebrationadmin/creation/[id].vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * New celebration creation interface including:
 * - Event type selection
 * - Mandatory event details and schedule (title, description, date and hour planning...)
 * - Optionnal event details and schedule (collaboratory playlist, gift list link...)
 *
 * @route /celebrationadmin/creation
 * @auth required
 */

import { ref } from 'vue'
import type { CelebrationType } from '~/types'

// Middleware setup
definePageMeta({
  middleware: 'auth',
})

const { t } = useI18n()

useHead({
  meta: [
    { name: 'description', content: t('metadescription.celebrationadmin_creation') },
  ],
})

const runtimeConfig = useRuntimeConfig()
const { auth } = useSupabaseClient()

const { data: { user } } = await auth.getUser()

// Form inputs
const celebrationTitle = ref<string>('')
const celebrationType = ref<string>('')
const celebrationDescription = ref<string>('')
const celebrationDate = ref<Date | null>(null)
const celebrationTime = ref<Date | null>(null)
const celebrationAddress = ref<string>('')
const creationSuccess = ref<boolean>(false)
const errorMsg = ref<string>('')

// Fetch available celebration types
const { data: celebration_type_list, error } = await useFetch<CelebrationType[]>(
  () => `${runtimeConfig.public.apiUrl}/celebrationtype`,
)
if (error.value) {
  console.error('Failed to fetch celebrationType data', error.value)
}

/**
 * Validates if the mandatory fields are filled.
 * @returns {boolean} true if all mandatory fields are filled.
 */
const validateForm = (): boolean => {
  return (
    !!celebrationTitle.value
    && !!celebrationType.value
    && !!celebrationDescription.value.trim()
    && celebrationDate.value !== null
    && celebrationTime.value !== null
    && !!celebrationAddress.value.trim()
  )
}

/**
 * Handles the form submission and celebration creation.
 * - Validates the form.
 * - Sends a request to create a new celebration.
 * - Clears the form and shows a success message.
 */
const createNewCelebration = async () => {
  // Validate the form fields
  if (!validateForm()) {
    return showError(errorMsg, t('celebration.creation-all-fiels-required'))
  }

  const formattedDate = formatDate(celebrationDate.value!)
  const formattedTime = formatTime(celebrationTime.value!)

  errorMsg.value = ''

  // Send a request to create a new celebration
  const { error } = await useFetch(`${runtimeConfig.public.apiUrl}/celebration`, {
    method: 'POST',
    body: {
      name: celebrationTitle.value,
      celebrationType: celebrationType.value,
      description: celebrationDescription.value,
      date: formattedDate,
      hour: formattedTime,
      address: celebrationAddress.value,
      author: user!.id,
    },
  })

  if (error.value) {
    throw new Error('Unable to process your request. Please try again later.')
  }

  // Clear form after successful creation
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
                <option
                  v-for="item in celebration_type_list"
                  :id="item.key"
                  :key="item.key"
                  :value="item.celebrationTypeId"
                >
                  {{ item.category }}
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
          >{{
            errorMsg
          }}</span>
          <button
            id="celebration-creation"
            type="submit"
            class="w-full button-validation"
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
input,
select,
option,
textarea,
#datepicker-timeonly *,
#datepicker-month * {
  background-color: white !important;
}
#celebration-type {
  height: 40px;
}
</style>
