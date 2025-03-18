<script setup lang="ts">
/**
 * @component components/ModifyAvatar.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This component allows the user to modify his avatar by selecting from a gallery of available avatars.
 * It opens a dialog where the user can select an avatar and save the changes to their profile.
 *
 * @example
 * <ModifyAvatar
 *   :initialAvatar="initialAvatarUrl"
 *   :isOpened="isDialogOpen"
 *   :userId="user.id"
 *   @closeModifyAvatar="handleCloseDialog"
 *   @updateAvatar="handleAvatarUpdate"
 * />
 */

import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import type { Avatar } from '~/types'

const toast = useToast()
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()

// Default avatar fallback URL
const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

// Fetch available avatars from the API
const { data: avatars, error } = await useFetch<Avatar[]>(
  () => `${runtimeConfig.public.apiUrl}/avatars`,
)
if (error.value) {
  console.error('Failed to fetch avatars data', error.value)
}

const props = defineProps<{
  initialAvatar: string
  isOpened: boolean
  userId: string
  closeModifyAvatar: () => void
  updateAvatar: (newAvatar: string) => void
}>()

const open = ref(props.isOpened)

// Watch for changes in isOpened prop to sync with local state
watch(() => props.isOpened, (newVal) => {
  open.value = newVal
})

const selectedAvatarId = ref(props.initialAvatar)

/**
 * Sets the selected avatar
 * @param {string} id - The ID of the selected avatar
 */
const selectAvatar = (id: string): void => {
  selectedAvatarId.value = id
}

/**
 * Closes the avatar modification dialog
 * Emits an event to notify the parent component
 */
const closeModifyAvatar = (): void => {
  open.value = false
  props.closeModifyAvatar()
}

/**
 * Updates the user's avatar in the database
 * Shows a success toast and emits events on successful update
 */
const updateAvatarInDatabase = async (): Promise<void> => {
  const { error } = await useFetch(`${runtimeConfig.public.apiUrl}/avatar/user/${props.userId}`, {
    method: 'PUT',
    body: {
      id: props.userId,
      newAvatar: selectedAvatarId.value,
    },
  })

  if (error.value) {
    console.error(`Erreur lors de la mise à jour de l'avatar :`, error.value)
    return
  }
  // Show success notification
  toast.add({
    severity: 'success',
    summary: t('user.update.title'),
    detail: t('user.update.description'),
    life: 3000,
  })
  props.updateAvatar(selectedAvatarId.value)
  props.closeModifyAvatar()
  // Refresh the page to reflect changes
  window.location.reload()
}
</script>

<template>
  <TransitionRoot
    as="template"
    :show="open"
  >
    <Dialog
      class="relative z-10"
      @close="closeModifyAvatar"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-base font-semibold leading-6 text-gray-900"
                    >
                      {{ $t("avatar.modification_title") }}
                    </DialogTitle>
                  </div>
                </div>
              </div>
              <div class="avatars-gallery">
                <div
                  v-for="(avatar, index) in avatars"
                  :key="index"
                  class="avatar"
                  :class="{ 'selected-avatar': avatar.avatarId === selectedAvatarId }"
                  :style="{
                    backgroundImage: `url(${
                      avatar.picture || defaultAvatarUrl
                    })`,
                  }"
                  :aria-label="avatar.pictureDescription"
                  @click="selectAvatar(avatar.avatarId)"
                >
                  <img
                    :src="avatar.picture || defaultAvatarUrl"
                    :alt="avatar.pictureDescription || 'User avatar'"
                    class="hidden"
                  >
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 mt-4 gap-4 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="w-full button-action"
                  @click="updateAvatarInDatabase"
                >
                  {{ $t("button.save") }}
                </button>
                <Toast />
                <button
                  type="button"
                  class="w-full button-cancel"
                  @click="closeModifyAvatar"
                >
                  {{ $t("button.cancel") }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss" scoped>
.avatars-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid $tangerine;
  background-color: $seashell;
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
}

.selected-avatar {
  border: 4px solid green !important;
}

.avatar:hover {
  border: 4px solid $indigo;
}
</style>
