<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import type { Avatar } from '@/types'

const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

const runtimeConfig = useRuntimeConfig()
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

watch(() => props.isOpened, (newVal) => {
  open.value = newVal
})

const selectedAvatarId = ref(props.initialAvatar)

function selectAvatar(id: string) {
  selectedAvatarId.value = id
}

const closeModifyAvatar = () => {
  open.value = false
  props.closeModifyAvatar()
}

async function updateAvatarInDatabase() {
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
  props.updateAvatar(selectedAvatarId.value)
  props.closeModifyAvatar()
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
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  @click="updateAvatarInDatabase"
                >
                  {{ $t("button.save") }}
                </button>
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
