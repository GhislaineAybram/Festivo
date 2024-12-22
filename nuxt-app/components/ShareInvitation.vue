<script setup lang="ts">
import Popover from 'primevue/popover'
import { ref } from 'vue'
import type { GuestWithUserInfo } from '~/types'

const op = ref()
const copySuccess = ref(false)

const runtimeConfig = useRuntimeConfig()

const props = defineProps({
  celebrationId: {
    type: String,
    required: true,
  },
})

const { data: guestsList, error: guestsListError } = await useFetch<GuestWithUserInfo>(
  () => `${runtimeConfig.public.apiUrl}/guests/celebration/${props.celebrationId}`,
)
if (guestsListError.value) {
  console.error('Failed to fetch nb of guest celebration', guestsListError.value)
}
const guestInfoList = computed(() => guestsList.value.guests_list || [])
const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

const toggle = (event: MouseEvent) => {
  op.value.toggle(event)
}

const shareLink = `${runtimeConfig.public.url}/celebration/${props.celebrationId}`
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
    <Button
      type="button"
      icon="pi pi-share-alt"
      label="Share"
      @click="toggle"
    />

    <Popover
      ref="op"
      class="popover-container"
    >
      <div class="flex flex-col gap-4 w-[25rem]">
        <div>
          <span class="font-medium block mb-2">Share this document</span>
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
                copied
              </span>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-medium block mb-2">Invités</span>
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
                :src="guest.user_id.avatar.picture || defaultAvatarUrl"
                :alt="guest.user_id.avatar.picture_description || 'User avatar'"
                style="width: 32px"
              >
              <div>
                <span class="font-medium">{{ guest.user_id.alias }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popover>
  </div>
</template>

<style scoped>

</style>
