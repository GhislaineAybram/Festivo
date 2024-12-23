<script setup lang="ts">
import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import { useRuntimeConfig } from '#app'
import type { CelebrationWithPictureAndAuthor, GuestWithUserInfo } from '~/types'

const { id } = useRoute().params
const { auth } = useSupabaseClient()
const { data: { user } } = await auth.getUser()
const userId = user?.id

const runtimeConfig = useRuntimeConfig()
const { data: celebration, error: celebrationError } = await useFetch<CelebrationWithPictureAndAuthor>(
  () => `${runtimeConfig.public.apiUrl}/celebration/${id}`,
)
if (celebrationError.value) {
  console.error('Failed to fetch celebration data', celebrationError.value)
}

const { data: guestsList, error: guestsListError } = await useFetch<GuestWithUserInfo>(
  () => `${runtimeConfig.public.apiUrl}/guests/celebration/${id}`,
)
if (guestsListError.value) {
  console.error('Failed to fetch nb of guest celebration', guestsListError.value)
}
const nbGuests = computed(() => guestsList.value.nb_guests || 0)
const guestInfoList = computed(() => guestsList.value.guests_list || [])

const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

// add the invited user if not already done
const checkAndRegisterInvitedUser = async () => {
  const response = await $fetch(`/api/guest`, {
    method: 'POST',
    body: {
      user_id: userId,
      celebration_id: id,
    },
  }) as { error?: string }

  if (response.error) {
    console.error(`Erreur lors de la création de l'invitation :`, response.error)
    return
  }
}

checkAndRegisterInvitedUser()

const { data: isComing, error: isComingError } = await useFetch<boolean | null>(
  () => `${runtimeConfig.public.apiUrl}/guest/${userId}/${id}`,
)
if (isComingError.value) {
  console.error('Failed to fetch guest response data', isComingError.value)
}

// add the response guest
async function updateIsComingGuestInDatabase(guestResponse: boolean | null) {
  const response = await $fetch(`/api/guest/${userId}/${id}`, {
    method: 'POST',
    body: {
      userId: userId,
      celebrationId: id,
      isComing: guestResponse,
    },
  }) as { error?: string }

  if (response.error) {
    console.error(`Erreur lors de la mise à jour de la réponse :`, response.error)
    return
  }
  isComing.value = guestResponse
}
</script>

<template>
  <main class="main">
    <div class="bg-white">
      <!-- <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"> -->
      <div>
        <div id="photo-title-celebration">
          <h1 class="text-3xl font-bold sm:text-4xl">
            {{ celebration?.name }}
          </h1>
          <img
            :src="celebration?.celebration_type.picture"
            alt="photo de ballons"
            class="photo-celebration"
          >
          <p
            id="celebration-author-name"
            class="mt-4 text-gray-500"
          >
            {{ $t("celebration.created") }} {{ celebration?.author.firstname }}
          </p>
        </div>
        <h3 class="text-2xl mt-4 text-gray-900">
          {{ celebration?.description }}
        </h3>
        <div id="celebration-details">
          <dl
            class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.date") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ $t("celebration.the") }} {{ celebration?.date }}
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.hour") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ $t("celebration.at") }} {{ celebration?.hour }}
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.address") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ celebration?.address }}
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.guests") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ nbGuests }}
              </dd>
              <div class="flex -space-x-2 overflow-hidden">
                <div
                  v-for="(guest, index) in guestInfoList"
                  :key="index"
                >
                  <img
                    :src="guest.user_id.avatar.picture || defaultAvatarUrl"
                    :alt="guest.user_id.avatar.picture_description || 'User avatar'"
                    class="inline-block size-12 rounded-full ring-2 ring-white"
                  >
                  <p class="mt-2 text-xs text-gray-500">
                    {{ guest.user_id.alias }}
                  </p>
                </div>
              </div>
            </div>
          </dl>

          <dl
            class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.answer") }}
              </dt>
              <div id="celebration-answer">
                <Button
                  icon="pi pi-check"
                  severity="success"
                  rounded
                  aria-label="Filter"
                  :class="{ 'opacity-40': isComing !== true }"
                  @click="updateIsComingGuestInDatabase(true)"
                />
                <Button
                  icon="pi pi-bell"
                  severity="warn"
                  rounded
                  aria-label="Notification"
                  :class="{ 'opacity-40': isComing !== null }"
                  @click="updateIsComingGuestInDatabase(null)"
                />
                <Button
                  icon="pi pi-times"
                  severity="danger"
                  rounded
                  aria-label="Cancel"
                  :class="{ 'opacity-40': isComing !== false }"
                  @click="updateIsComingGuestInDatabase(false)"
                />
              </div>
            </div>
          </dl>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#photo-title-celebration {
  position: relative;
}
.photo-celebration {
  max-height: 600px;
  width: auto;
  filter: opacity(35%);
  z-index: -1;
}
h1 {
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#celebration-author-name {
  color: $grey;
  text-align: right;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
h3 {
  color: $indigo;
  background-color: $seashell;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: left;
  padding-left: 50px;
}
@media (min-width: 1024px) {
  #celebration-details {
    margin-top: 59px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
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
