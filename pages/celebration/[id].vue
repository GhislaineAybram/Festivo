<script setup lang="ts">
/**
 * @file pages/celebration/[id].vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Interactive celebration page for guests featuring:
 * - Event details and schedule
 * - RSVP functionality
 * - Guests list with coming status
 * - Food allergy & diet requirement status for incoming guests group
 *
 * @route /celebration/[id]
 * @auth required
 * @param {string} id - Celebration identifier
 */

import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import {
  CalendarIcon,
  ClockIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  GiftIcon,
  InformationCircleIcon,
  MapPinIcon,
  MusicalNoteIcon,
  TrophyIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
import { useToast } from 'primevue/usetoast'
import { useRuntimeConfig } from '#app'
import type {
  CelebrationWithPictureAndAuthor,
  GuestWithUserInfo,
} from '~/types'

// Middleware setup
definePageMeta({
  middleware: 'invitation',
})

const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()
const { auth } = useSupabaseClient()
const { data: { user } } = await auth.getUser()

// Get the celebration ID from the route parameters
const { id } = useRoute().params as { id: string }
const userId = user?.id

const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

// Dietary and allergy options for guest restrictions
const diet = getDietOptions()
const allergy = getAllergyList()
const restrictions = [
  ...diet.map(item => ({ ...item, type: 'diet' })),
  ...allergy.map(item => ({ ...item, type: 'allergy' })),
]

// Fetch celebration details
const { data: celebration, error: celebrationError }
  = await useFetch<CelebrationWithPictureAndAuthor>(
    () => `${runtimeConfig.public.apiUrl}/celebration/${id}`,
  )
if (celebrationError.value) {
  console.error('Failed to fetch celebration data', celebrationError.value)
}

// Fetch guest list for this celebration
const { data: guestsList, error: guestsListError, refresh: refreshGuestsList }
  = await useFetch<GuestWithUserInfo>(
    () => `${runtimeConfig.public.apiUrl}/guests/celebration/${id}`,
  )
if (guestsListError.value) {
  console.error(
    'Failed to fetch nb of guest celebration',
    guestsListError.value,
  )
}

// Computed properties for guests data
const nbGuests = computed(() => guestsList.value.nb_guests || 0)
const guestInfoList = computed(() => guestsList.value.guests_list || [])
const restrictionsguestsList = computed(() => guestsList.value.restrictionsCounts || [])

// Automatically register the invited user if they are not the event author
const checkAndRegisterInvitedUser = async () => {
  if (userId !== celebration.value.author.id) {
    const { error } = await useFetch(`${runtimeConfig.public.apiUrl}/guest`, {
      method: 'POST',
      body: {
        userId: userId,
        celebrationId: id,
      },
    })

    if (error.value) {
      console.log(`Erreur lors de la création de l'invitation :`, error.value)
      return
    }
  }
}

checkAndRegisterInvitedUser()

// Fetch the user's attendance status for this celebration
const { data: isComing, error: isComingError } = await useFetch<boolean | null>(
  () => `${runtimeConfig.public.apiUrl}/guest/${userId}/${id}`,
)
if (isComingError.value) {
  console.error('Failed to fetch guest response data', isComingError.value)
}

// Update guest attendance status
const updateIsComingGuestInDatabase = async (guestResponse: boolean | null) => {
  const { error } = await useFetch(`${runtimeConfig.public.apiUrl}/guest/${userId}/${id}`, {
    method: 'PUT',
    body: {
      userId: userId,
      celebrationId: id,
      isComing: guestResponse,
    },
  })

  if (error.value) {
    console.error(`Erreur lors de la mise à jour de la réponse :`, error.value)
    return
  }

  isComing.value = guestResponse
  // update avatar circle color
  await refreshGuestsList()
  toast.add({
    severity: 'success',
    summary: t('guest.successfull'),
    detail: t('guest.success_message'),
    life: 3000,
  })
}
</script>

<template>
  <main class="main">
    <div class="bg-white">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <!-- bloc d'en-tête de l'événement -->
        <div id="photo-title-celebration">
          <h1 class="text-3xl font-bold sm:text-4xl">
            {{ celebration?.name }}
          </h1>
          <img
            :src="celebration?.celebrationType.picture"
            alt="photo de ballons"
            class="photo-celebration"
          >
          <p
            id="celebration-author-name"
            class="mt-4 text-gray-500"
          >
            {{ $t("celebration.created") }} {{ celebration?.author.alias }}
          </p>
        </div>

        <h3 class="text-2xl text-gray-900 text-center sm:hidden">
          {{ celebration?.description }}
        </h3>

        <!-- bloc de réponse de l'utilisateur -->
        <div
          id="important-info"
          class="content-center"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="flex items-center mt-4">
              <EnvelopeOpenIcon
                class="icon rounded-lg size-8 text-white p-1.5"
              />
              <div class="font-medium text-gray-900 flex px-2">
                {{ $t("celebration.answer") }}
              </div>
            </div>
            <div
              id="celebration-answer"
              class="mt-4"
            >
              <Button
                icon="pi pi-check"
                severity="success"
                rounded
                aria-label="Filter"
                :class="{ 'opacity-40': isComing !== true }"
                @click="updateIsComingGuestInDatabase(true)"
              />
              <Button
                icon="pi pi-question"
                severity="warn"
                rounded
                aria-label="Notification"
                :class="{ 'opacity-40': isComing != null }"
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
              <Toast />
            </div>
          </div>

          <!-- bloc info importantes événement -->
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4">
            <div class="flex items-center">
              <CalendarIcon
                class="icon rounded-lg size-8 text-white p-1.5"
              />
              <div class="font-medium text-gray-900 flex px-2">
                {{ $t("celebration.date") }}
              </div>
            </div>
            <div class="text-sm text-gray-500 self-center">
              {{ $d(celebration?.date, { year: "numeric", month: "long", day: "numeric" }) }}
            </div>
          </div>

          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4">
            <div class="flex items-center">
              <ClockIcon
                class="icon rounded-lg size-8 text-white p-1.5"
              />
              <div class="font-medium text-gray-900 flex px-2">
                {{ $t("celebration.hour") }}
              </div>
            </div>
            <div class="text-sm text-gray-500 self-center">
              {{ $d(new Date(`${new Date().toISOString().split('T')[0]}T${celebration?.hour}`), { hour: "2-digit", minute: "2-digit" }) }}
            </div>
          </div>

          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4">
            <div class="flex items-center">
              <MapPinIcon
                class="icon rounded-lg size-8 text-white p-1.5"
              />
              <div class="font-medium text-gray-900 flex px-2">
                {{ $t("celebration.address") }}
              </div>
            </div>
            <div class="text-sm text-gray-500 self-center">
              {{ celebration?.address }}
            </div>
          </div>

          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4">
            <div class="flex items-center">
              <InformationCircleIcon
                class="icon rounded-lg size-8 text-white p-1.5"
              />
              <div class="font-medium text-gray-900 flex px-2">
                Info annexes
              </div>
            </div>
            <div class="text-sm text-gray-500 self-center">
              blablabla
            </div>
          </div>

          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-orange-200 pt-4 mt-4">
            <div class="flex items-center">
              <ExclamationTriangleIcon
                class="icon-attention rounded-lg size-8 text-white p-1.5"
              />
              <div class="font-medium text-gray-900 flex px-2">
                Attention
              </div>
            </div>
            <div class="flex text-sm text-gray-500 self-center">
              <div
                v-for="item in restrictions"
                :key="item.key"
              >
                <div v-if="restrictionsguestsList?.[item.db] > 0">
                  <div
                    v-tooltip.autoPosition.fit.focus="{
                      value: restrictionsguestsList?.[item.db] + ' guests ' + item.name + ' = ' + item.description,
                      class: 'bg-primary text-xs p-2 max-w-[200px]',
                    }"
                    :style="{
                      backgroundImage: `url(${
                        item.logo || defaultAvatarUrl
                      })`,
                    }"
                    class="inline-block size-10 rounded-full guest-avatar"
                    :title="item.name || 'Restriction logo'"
                    tabindex="0"
                  />
                </div>
              </div>
            </div>
            <div class="mt-0" />
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200">
        <h3 class="text-2xl text-gray-900 text-center hidden sm:block">
          {{ celebration?.description }}
        </h3>
      </div>

      <div
        id="option-info"
        class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
      >
        <div class="border-t border-gray-200">
          <div class="flex items-center pt-4">
            <UsersIcon
              class="icon rounded-lg size-8 text-white p-1.5"
            />
            <div class="font-medium text-gray-900 flex px-2">
              {{ nbGuests }} {{ $t("celebration.guests") }}
            </div>
          </div>
          <div class="flex space-x-1 mt-4">
            <div
              v-for="(guest, index) in guestInfoList"
              :key="index"
            >
              <div
                :style="{
                  backgroundImage: `url(${
                    guest.userId.avatar.picture || defaultAvatarUrl
                  })`,
                }"
                :alt="
                  guest.userId.avatar.pictureDescription || 'User avatar'
                "
                class="inline-block size-12 rounded-full ring-2 guest-avatar"
                :class="{
                  'ring-green-500': guest.isComing === true,
                  'ring-red-500': guest.isComing === false,
                  'ring-gray-500': guest.isComing === null,
                }"
              />
              <p class="mt-1 text-xs text-gray-900 text-center">
                {{ guest.userId.alias }}
              </p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-4 flex">
          <GiftIcon class="icon rounded-lg size-8 text-white p-1.5" />
          <div class="flex items-center">
            <div class="font-medium text-gray-900 flex px-2">
              Lien cagnotte
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-4 flex">
          <MusicalNoteIcon
            class="icon rounded-lg size-8 text-white p-1.5"
          />
          <div class="flex items-center">
            <div class="font-medium text-gray-900 flex px-2">
              Playlist participative
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-4 mb-4 flex">
          <TrophyIcon class="icon rounded-lg size-8 text-white p-1.5" />
          <div class="flex items-center">
            <div class="font-medium text-gray-900 flex px-2">
              Concours déguisement
            </div>
          </div>
        </div>
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
#important-info {
  background-color: $seashell;
  padding-left: 1rem;
  width: auto
}
#option-info {
  padding-left: 1rem;
  background-color: $whisper;
}

h3 {
  color: $indigo;
  background-color: $haze;
  width: 100%;
  min-height: 75px;
  height: 100%;
  align-content: center;
  text-align: left;
  padding: 1rem;
}
.guest-avatar {
  border-radius: 50%;
  background-color: $seashell;
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
}
.icon {
  background-color: $indigo;
  color: $tangerine;
}
.icon-attention {
  background-color: $tangerine;
  color: $indigo;
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
