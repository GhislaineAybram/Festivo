<script setup lang="ts">
/**
 * @file pages/profile/[id].vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * User profile page displaying :
 * - User information and preferences
 * - Profile customisation options (username, avatar, diet requirement, food allergy)
 * - Delete account option
 *
 * @route /profile/[id]
 * @auth required
 * @param {string} id - User identifier
 */

import AccordionPanel from 'primevue/accordionpanel'
import { useToast } from 'primevue/usetoast'
import type { ResponseWithSuccess, UserWithAvatar } from '~/types'

// Middleware setup
definePageMeta({
  middleware: 'auth',
})

const { t } = useI18n()

useHead({
  meta: [
    { name: 'description', content: t('metadescription.profile') },
  ],
})

const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const { auth } = useSupabaseClient()

const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

const { data: { user } } = await auth.getUser()
const userId = user!.id
const metadata = user?.user_metadata
const email = computed(() => user?.email || '')

// Form inputs
const alias = ref<string>('')
const aliasTitle = ref<string>('')
const errorMsg = ref<string>('')
const updateSuccess = ref<boolean>(false)
const activeDiet = ref<string>('0')
const activeAllergy = ref<string>('0')

// Modal states
const isModifyAvatarOpened = ref<boolean>(false)
const isDeleteAlertVisible = ref<boolean>(false)
const deleteAccountSuccess = ref<boolean>(false)

// Dietary and allergy options for guest restrictions
const diet = getDietOptions()
const allergy = getAllergyList()
const allUserInformation = [...diet, ...allergy]

alias.value = metadata?.alias || ''
aliasTitle.value = metadata?.alias || ''

/**
 * Fetch user profile data including avatar
 */
const { data: userAvatar, error: userAvatarError }
  = await useFetch<UserWithAvatar>(
    () => `${runtimeConfig.public.apiUrl}/user/${userId}`,
  )
if (userAvatarError.value) {
  console.error('Failed to fetch user data', userAvatarError.value)
}
const avatar = ref(userAvatar.value?.avatar?.picture || defaultAvatarUrl)

// Functions for handling the user avatar modification pop up
const openModifyAvatar = () => {
  isModifyAvatarOpened.value = true
}
const closeModifyAvatar = () => {
  isModifyAvatarOpened.value = false
}
const openDeleteAlert = () => {
  isDeleteAlertVisible.value = true
}
const closeDeleteAlert = () => {
  isDeleteAlertVisible.value = false
}

/**
 * Updates the avatar in the profile page
 * @param {string} newAvatar - URL of the new avatar image
 */
const updateAvatarInProfilePage = (newAvatar: string) => {
  avatar.value = newAvatar
}

/**
 * Validates and updates the user's alias
 * @param {string} aliasValue - New alias to set
 * @returns {Promise<boolean>} - Success status of the operation
 */
const updateUserAlias = async (aliasValue: string) => {
  // Validate alias format
  const { isValidAlias, errorMessageAlias } = validateAlias(aliasValue, t)
  if (!isValidAlias) {
    showError(errorMsg, errorMessageAlias)
    return false
  }

  // Check if alias already exists (only if changed)
  if (aliasValue === aliasTitle.value) {
    return true
  }
  else {
    const { data: aliasExists } = await useFetch<boolean>(`${runtimeConfig.public.apiUrl}/users/check/alias`, {
      method: 'POST',
      body: {
        alias: aliasValue,
      },
    })
    if (aliasExists.value) {
      showError(errorMsg, t('register.error.alias-exists'))
      return false
    }
    else {
      try {
        // Update user metadata with new alias
        const { data, error } = await auth.updateUser({
          data: { alias: aliasValue },
        })
        if (error) {
          console.error('Error updating user alias:', error.message)
          return false
        }
        aliasTitle.value = aliasValue
        console.log('Success with data update:', data)
        return true
      }
      catch (err) {
        console.error('Unexpected error updating alias:', err)
        return false
      }
    }
  }
}

/**
 * Updates user preference (diet or allergy)
 * @param {Event} event - Form event
 * @returns {Promise<boolean>} - Success status of the operation
 */
const updateUserPreference = async (event: Event): Promise<boolean> => {
  const target = event.target as HTMLInputElement
  const restriction = target.id
  if (!restriction) {
    console.warn('No restriction ID found in the event target')
    return true // block the response if false
  }
  const item = allUserInformation.find(item => item.key === restriction)
  if (!item) {
    console.warn(`Restriction '${restriction}' not found in user information options`)
    return false
  }
  const dbField = item.db
  const value = target.checked ? true : false

  // Update local state
  userAvatar.value[dbField] = value
  try {
    // Send update to API
    const { error } = await useFetch(`${runtimeConfig.public.apiUrl}/user/${userId}`, {
      method: 'PUT',
      body: { [dbField]: value },
    })

    if (error.value) {
      console.error(`Error updating user preference '${dbField}':`, error.value)
      return false
    }
    return true
  }
  catch (error) {
    console.error(`Error updating user preference '${dbField}':`, error)
    return false
  }
}

/**
 * Updates all user profile information
 * @param {Event} event - Form event
 */
const updateUserProfile = async (event: Event) => {
  try {
    const results = await Promise.all([
      updateUserAlias(alias.value),
      updateUserPreference(event),
    ])
    const allSuccessful = results.every(result => result === true)
    if (allSuccessful) {
      updateSuccess.value = true
      toast.add({
        severity: 'success',
        summary: t('user.update.title'),
        detail: t('user.update.description'),
        life: 3000,
      })
    }
    else {
      console.error('Une des mises à jour a échoué.')
    }
  }
  catch (error) {
    console.error('Erreur lors de la mise à jour :', error)
  }
}

/**
 * Delete the user account
 */
const confirmDeleteAccount = async () => {
  const success = await deleteAccount(userId)
  if (success.body.success) {
    deleteAccountSuccess.value = true
    isDeleteAlertVisible.value = false
  }
}

/**
 * Deletes the user account and handles session cleanup
 * @param {string} userId - User Id
 * @returns {Promise<ResponseWithSuccess>} - Success status and message
 */
const deleteAccount = async (userId: string) => {
  try {
    const { error } = await useFetch<ResponseWithSuccess>(`${runtimeConfig.public.apiUrl}/user/${userId}`, {
      method: 'DELETE',
    })
    if (error.value) {
      console.error('Error deleting user account:', error.value)
      return {
        statusCode: 404,
        body: {
          success: false,
          error: 'User not found or deletion failed.',
        },
      }
    }
    // Sign out user and clean up session
    try {
      await auth.signOut()
    }
    catch (signOutError) {
      console.error('Error signing out after account deletion:', signOutError)
    }

    toast.add({
      severity: 'success',
      summary: t('delete.success.title'),
      detail: t('delete.success.subtitle'),
      life: 3000,
    })

    navigateTo('/login')

    return {
      statusCode: 200,
      body: { success: true, message: 'User deleted successfully.' },
    }
  }
  catch (error) {
    console.error('Error deleting user:', error)
    return {
      statusCode: 500,
      body: { success: false, error: 'Internal server error.' },
    }
  }
}
</script>

<template>
  <main class="main">
    <div v-if="user">
      <div v-if="isModifyAvatarOpened">
        <ModifyAvatar
          :initial-avatar="userAvatar.avatar.avatarId"
          :is-opened="isModifyAvatarOpened"
          :user-id="userId"
          :close-modify-avatar="closeModifyAvatar"
          :update-avatar="updateAvatarInProfilePage"
          @close="closeModifyAvatar"
        />
      </div>

      <div class="rounded-t-lg h-32 overflow-hidden">
        <img
          class="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mountain"
        >
      </div>
      <div
        class="mx-auto w-36 h-36 relative -mt-20 border-4 border-white rounded-full overflow-hidden"
      >
        <div id="photo-profile">
          <div
            id="profile-picture"
            alt="profile avatar"
            :style="{ backgroundImage: `url(${avatar})` }"
            class="object-cover object-center h-36 w-full rounded-full overflow-hidden"
          />
        </div>

        <button
          class="edit-button"
          @click="openModifyAvatar"
        >
          <svg
            class="edit-svgIcon"
            viewBox="0 0 512 512"
          >
            <path
              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
            />
          </svg>
        </button>
      </div>

      <div class="text-center mt-2">
        <h2 class="font-semibold">
          {{ aliasTitle }}
        </h2>
      </div>

      <form
        id="profile-details"
        @submit.prevent
      >
        <div class="border-y border-gray-900/10 py-6 my-6">
          <h3 class="text-xl px-4 font-semibold leading-7 text-gray-900">
            {{ $t("user.informations") }}
          </h3>
        </div>

        <div class="grid grid-cols-1 px-4 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
            >{{ $t("user.alias") }}</label>
            <div class="mt-2">
              <input
                id="username"
                v-model="alias"
                type="text"
                name="username"
                autocomplete="alias"
                class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >{{ $t("user.email") }}</label>
            <div class="mt-2">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                readonly
                class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>
        </div>

        <div class="border-y px-4 border-gray-900/10 mt-4 py-6">
          <h3 class="text-xl font-semibold leading-7 text-gray-900">
            {{ $t("user.alimentation") }}
          </h3>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            {{ $t("user.alimentation_explanation") }}
          </p>
        </div>

        <fieldset>
          <div class="card">
            <Accordion v-model:value="activeDiet">
              <AccordionPanel
                value="1"
                class="px-4"
              >
                <AccordionHeader
                  id="accordion-header"
                  class="flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                >
                  <h5
                    class="text-m font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0"
                  >
                    {{ $t("user.diet") }}
                  </h5>
                </AccordionHeader>
                <AccordionContent>
                  <div
                    v-for="item in diet"
                    :key="item.key"
                    class="relative flex gap-x-6"
                  >
                    <div class="flex h-6 items-center">
                      <input
                        :id="item.key"
                        type="checkbox"
                        :name="item.key"
                        :checked="userAvatar[item.db]"
                        class="checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        @change="updateUserPreference"
                      >
                    </div>
                    <div class="text-sm leading-6">
                      <label
                        :for="item.key"
                        class="font-medium text-gray-900"
                      >{{
                        item.name
                      }}</label>
                      <p class="text-gray-500">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </fieldset>

        <fieldset>
          <div class="card">
            <Accordion v-model:value="activeAllergy">
              <AccordionPanel
                value="1"
                class="px-4"
              >
                <AccordionHeader
                  id="accordion-header"
                  class="flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 sm:justify-between"
                >
                  <h5
                    class="text-m font-semibold leading-6 text-gray-900 w-full sm:w-auto mb-3 sm:mb-0"
                  >
                    {{ $t("user.allergies") }}
                  </h5>
                </AccordionHeader>
                <AccordionContent>
                  <div
                    v-for="item in allergy"
                    :key="item.key"
                    class="relative flex gap-x-3"
                  >
                    <div class="flex h-6 items-center">
                      <input
                        :id="item.key"
                        type="checkbox"
                        :name="item.key"
                        :checked="userAvatar[item.db]"
                        class="checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        @change="updateUserPreference"
                      >
                    </div>
                    <div class="text-sm leading-6">
                      <label
                        :for="item.key"
                        class="font-medium text-gray-900"
                      >{{ item.name }}</label>
                      <p class="text-gray-500">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </fieldset>
        <span
          v-if="errorMsg"
          class="mt-6 flex text-sm text-red-500 items-center justify-center"
        >{{ errorMsg }}</span>
        <div class="mt-6 flex md:flex-row px-4 items-center justify-center md:justify-end gap-x-6">
          <button
            type="button"
            class="min-w-32 mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 hover:bg-gray-50"
          >
            {{ $t("user.cancel") }}
          </button>
          <Toast />
          <button
            type="button"
            label="Success"
            severity="success"
            class="min-w-32 mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click.prevent="updateUserProfile"
          >
            {{ $t("user.save") }}
          </button>
        </div>
        <div
          class="bg-red-100 px-4 border-y border-gray-900/10 py-6 my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 class="text-xl font-semibold leading-7 text-gray-900">
              {{ $t("user.delete.title") }}
            </h3>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              {{ $t("user.delete.description") }}
            </p>
          </div>
          <button
            type="button"
            class="min-w-64 mx-auto md:mx-0 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            @click.prevent="openDeleteAlert"
          >
            {{ $t("user.delete.button") }}
          </button>
        </div>
      </form>
      <AlertDeleteAccount
        v-if="isDeleteAlertVisible"
        class="alert"
        @confirm="confirmDeleteAccount"
        @cancel="closeDeleteAlert"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
#profile-picture {
  background-color: $seashell;
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
h2 {
  color: $indigo;
}
.relative {
  overflow: visible;
}
.edit-button {
  background-color: $indigo;
  width: 29px;
  height: 29px;
  border-radius: 10px;
  border: 1px solid $indigo;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  text-decoration: none !important;
  position: absolute;
  bottom: 0;
  right: 0;
}
.edit-svgIcon {
  width: 17px;
}
.edit-svgIcon path {
  fill: white;
}
#profile-details {
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  width: 100%;
}
#accordion-header {
  padding-left: 0;
  padding-right: 0;
}
.checkbox:checked {
  accent-color: $indigo;
}
</style>
