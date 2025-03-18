<script setup lang="ts">
/**
 * @component components/ShareInvitation.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This component is intended to be used for sharing event invitations.
 * This component allows the user to copy the event's URL to the clipboard
 * and view the list of current attendees.
 *
 * @example
 * <ShareInvitation :celebration-id="id" />
 */

import Popover from 'primevue/popover'
import { ref } from 'vue'
import { ShareIcon } from '@heroicons/vue/24/outline'
import type { GuestWithUserInfo } from '~/types'

const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()

// Reactive references for UI state
const op = ref()
const copySuccess = ref(false)

// Default fallback for user avatars
const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

// Component props definition
const props = defineProps({
  celebrationId: {
    type: String,
    required: true,
  },
})

/**
 * Fetch the guest list for the celebration
 * @returns {Promise<GuestWithUserInfo>} The list of guests with their user information
 */
const { data: guestsList, error: guestsListError } = await useFetch<GuestWithUserInfo>(
  () => `${runtimeConfig.public.apiUrl}/guests/celebration/${props.celebrationId}`,
)
if (guestsListError.value) {
  console.error('Failed to fetch nb of guest celebration', guestsListError.value)
}
// Computed property to safely access the guest list
const guestInfoList = computed(() => guestsList.value.guests_list || [])

/**
 * Toggle the popover visibility
 * @param {MouseEvent} event - The mouse event that triggered the toggle
 */
const toggle = (event: MouseEvent) => {
  op.value.toggle(event)
}

// Prepare the sharing message with the celebration link
const shareLink = `${t('celebration.modification.share.sentence')} :\n\n${runtimeConfig.public.url}/celebration/${props.celebrationId}`

/**
 * Copy the celebration sharing link to clipboard
 * Shows a temporary success message upon successful copy
 */
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(shareLink)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  }
  catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <div class="card flex justify-center">
    <button
      id="share"
      type="button"
      icon="pi pi-share-alt"
      class="px-7 py-3 gap-4 button-action"
      @click="toggle"
    >
      <ShareIcon
        class="h-6 w-6"
        aria-hidden="true"
      />
      {{ $t('celebration.modification.share.button') }}
    </button>
    <Popover
      ref="op"
      class="popover-container p-popover ml-6 sm:ml-0"
    >
      <div class="flex flex-col gap-4 justify-center w-[20rem]">
        <div>
          <span class="font-medium block mb-2">{{ $t("celebration.modification.share.title") }}</span>
          <InputGroup>
            <InputText
              :value="`${runtimeConfig.public.url}/celebration/${celebrationId}`"
              readonly
              class="w-[25rem]"
            />
            <InputGroupAddon>
              <i
                v-if="!copySuccess"
                class="pi pi-copy"
                title="Copy to clipboard"
                @click="copyToClipboard"
              />
              <span
                v-if="copySuccess"
                class="text-green-500 transition-opacity duration-500 text-xs"
              >
                {{ $t("celebration.modification.share.copied") }}
              </span>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-medium block mb-2">{{ $t("celebration.modification.share.guests") }}</span>
          <!-- <Button
            label="Invite"
            icon="pi pi-users"
          /> -->
        </div>
        <div>
          <ul class="list-none p-0 m-0 flex flex-col gap-4">
            <li
              v-for="(guest, index) in guestInfoList"
              :key="index"
              class="flex items-center gap-2"
            >
              <img
                :src="guest.userId.avatar.picture || defaultAvatarUrl"
                :alt="guest.userId.avatar.pictureDescription || 'User avatar'"
                style="width: 32px; border: 1px solid #180161; border-radius: 50%;"
                class="avatar"
              >
              <div>
                <span class="font-medium">{{ guest.userId.alias }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popover>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  background-color: $seashell;
}
</style>
