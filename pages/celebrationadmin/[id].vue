<script setup lang="ts">
/**
 * @file pages/celebrationadmin/[id].vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Administrative interface for event hosts with :
 * - Guest list management (share link generation)
 * - Event details editing
 *
 * @route /celebrationadmin/[id]
 * @auth required
 * @param {string} id - Celebration identifier
 */

import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import type { CelebrationType, CelebrationWithPictureAndAuthor, ResponseWithSuccess } from '~/types'

// Middleware setup
definePageMeta({
  middleware: 'author',
})

const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()
const { auth } = useSupabaseClient()
const { data: { user } } = await auth.getUser()

// Get the celebration ID from the route parameters
const { id } = useRoute().params as { id: string }

// Form inputs
const celebrationTitle = ref<string>('')
const celebrationType = ref<string>('')
const celebrationDescription = ref<string>('')
const celebrationDate = ref<Date | null>(null)
const celebrationTime = ref<Date | null>(null)
const celebrationAddress = ref<string>('')
const updateSuccess = ref<boolean>(false)
const isDeleteAlertVisible = ref<boolean>(false)
const deleteCelebrationSuccess = ref<boolean>(false)
const errorMsg = ref<string>('')

// Functions for handling the delete confirmation dialog
const openDeleteAlert = () => {
  isDeleteAlertVisible.value = true
}
const closeDeleteAlert = () => {
  isDeleteAlertVisible.value = false
}

/**
 * Delete the celebration
 */
const confirmDeleteCelebration = async () => {
  const success = await deleteCelebration(id)
  if (success.body.success) {
    deleteCelebrationSuccess.value = true
    isDeleteAlertVisible.value = false
  }
}

// Fetch available celebration types
const { data: celebration_type_list, error } = await useFetch<CelebrationType[]>(
  () => `${runtimeConfig.public.apiUrl}/celebrationtype`,
)
if (error.value) {
  console.error('Failed to fetch celebrationType data', error.value)
}

/**
 * Load celebration data from the API
 * @param {string} id - Celebration identifier
 */
const loadCelebrationData = async (id: string) => {
  try {
    const { data: celebration, error: celebrationError }
      = await useFetch<CelebrationWithPictureAndAuthor>(
        () => `${runtimeConfig.public.apiUrl}/celebration/${id}`,
      )
    if (celebrationError.value) {
      console.error('Failed to fetch celebration data', celebrationError.value)
    }
    // Populate form fields with fetched data
    celebrationTitle.value = celebration.value.name
    celebrationType.value = celebration.value.celebrationType.celebrationTypeId
    celebrationDescription.value = celebration.value.description
    celebrationDate.value = celebration.value.date
    celebrationTime.value = new Date(`1970-01-01T${celebration.value.hour}`)
    celebrationAddress.value = celebration.value.address
  }
  catch (err) {
    console.error('Unexpected error loading celebration data:', err)
  }
}

// Load celebration data when the component is mounted
onMounted(() => {
  loadCelebrationData(id)
})

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
 * Updates celebration information
 * @param {string} id - Celebration identifier
 */
const updateCelebrationInformations = async (id: string) => {
  try {
    if (!validateForm()) {
      return showError(errorMsg, t('celebration.creation-all-fiels-required'))
    }

    const formattedDate = formatDate(celebrationDate.value!)
    const formattedTime = formatTime(celebrationTime.value!)

    const { error } = await useFetch(`${runtimeConfig.public.apiUrl}/celebration/${id}`, {
      method: 'PUT',
      body: {
        celebrationId: id,
        name: celebrationTitle.value,
        celebrationType: celebrationType.value,
        description: celebrationDescription.value,
        date: formattedDate,
        hour: formattedTime,
        address: celebrationAddress.value,
      },
    })

    if (error.value) {
      throw new Error('Unable to process your request. Please try again later.')
    }

    updateSuccess.value = true
    toast.add({
      severity: 'success',
      summary: t('celebration.update.title'),
      detail: t('celebration.update.description'),
      life: 3000,
    })
  }
  catch (err) {
    console.error('Unexpected error updating celebration information:', err)
  }
}

/**
 * Deletes a celebration
 * @param {string} id - Celebration Id
 * @returns {Promise<ResponseWithSuccess>} - Success status and message
 */
const deleteCelebration = async (id: string) => {
  try {
    const { error } = await useFetch<ResponseWithSuccess>(`${runtimeConfig.public.apiUrl}/celebration/${id}`, {
      method: 'DELETE',
    })
    if (error.value) {
      return {
        statusCode: 404,
        body: { success: false, error: 'Celebration not found or deletion failed.' },
      }
    }
    toast.add({
      severity: 'success',
      summary: t('delete.success.title'),
      detail: t('delete.success.subtitle'),
      life: 3000,
    })

    // Redirect to the homepage after deletion
    setTimeout(() => {
      navigateTo('/')
    }, 1000)
    return {
      statusCode: 200,
      body: { success: true, message: 'Celebration deleted successfully.' },
    }
  }
  catch (error) {
    console.error('Error deleting celebration:', error)
    return {
      statusCode: 500,
      body: { success: false, error: 'Internal server error.' },
    }
  }
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
          {{ $t("celebration.modification.title") }}
        </h1>
      </div>
      <ShareInvitation :celebration-id="id" />
      <form
        class="mx-auto mt-10 max-w-xl sm:mt-10"
        @submit.prevent="updateCelebrationInformations(id)"
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
                :show-time="false"
                :utc="false"
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
        <div class="mt-8">
          <span
            v-if="errorMsg"
            class="text-sm text-red-500"
          >{{
            errorMsg
          }}</span>
          <Toast />
          <button
            id="celebration-creation"
            type="button"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="updateCelebrationInformations(id)"
          >
            {{ $t("celebration.modification.save") }}
          </button>
        </div>
        <div
          class="!bg-red-100 px-4 border-y border-gray-900/10 py-6 my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div class="!bg-red-100">
            <h3 class="!bg-red-100 text-xl font-semibold leading-7 text-gray-900">
              {{ $t("celebration.delete.title") }}
            </h3>
            <p class="!bg-red-100 mt-1 text-sm leading-6 text-gray-600">
              {{ $t("celebration.delete.subtitle") }}
            </p>
          </div>
          <button
            type="button"
            class="min-w-64 mx-auto md:mx-0 rounded-md !bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            @click="openDeleteAlert"
          >
            {{ $t("celebration.delete.button") }}
          </button>
        </div>
      </form>
      <AlertDeleteCelebration
        v-if="isDeleteAlertVisible"
        class="alert"
        @confirm="confirmDeleteCelebration"
        @cancel="closeDeleteAlert"
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
#celebration-creation {
  background-color: $tangerine;
  color: $indigo;
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
