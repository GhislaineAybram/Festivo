<script setup lang="ts">
import AccordionPanel from 'primevue/accordionpanel'
import { useRuntimeConfig } from '#app'
import ModifyAvatar from '~/components/ModifyAvatar.vue'
import type { UserWithAvatar } from '~/types'

const isDeleteAlertVisible = ref(false)
const deleteAccountSuccess = ref(false)
const openDeleteAlert = () => {
  isDeleteAlertVisible.value = true
}
const closeDeleteAlert = () => {
  isDeleteAlertVisible.value = false
}
const confirmDeleteAccount = async () => {
  const success = await deleteAccount(user_id)
  if (success.body.success) {
    deleteAccountSuccess.value = true
    isDeleteAlertVisible.value = false
  }
}
definePageMeta({
  middleware: 'auth',
})

const { auth } = useSupabaseClient()
const {
  data: { user },
} = await auth.getUser()
const metadata = user?.user_metadata

const pseudo = computed(() => metadata?.alias || '')
const firstname = computed(() => metadata?.firstname || '')
const lastname = computed(() => metadata?.lastname || '')
const email = computed(() => user?.email || '')

const user_id = user!.id
const runtimeConfig = useRuntimeConfig()

const { data: userAvatar, error: userAvatarError }
  = await useFetch<UserWithAvatar>(
    () => `${runtimeConfig.public.apiUrl}/user/${user_id}`,
  )
if (userAvatarError.value) {
  console.error('Failed to fetch user data', userAvatarError.value)
}

const defaultAvatarUrl
  = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const avatar = ref(userAvatar.value?.avatar?.picture || defaultAvatarUrl)

const active = ref('0')

const isModifyAvatarOpened = ref(false)

const openModifyAvatar = () => {
  isModifyAvatarOpened.value = true
}
const closeModifyAvatar = () => {
  isModifyAvatarOpened.value = false
}

const updateAvatarInProfilePage = (newAvatar: string) => {
  avatar.value = newAvatar
}
watch(avatar, (newAvatar) => {
  console.log('Avatar mis à jour :', newAvatar)
})

const deleteAccount = async (user_id: string) => {
  try {
    const isUserDeleted = await $fetch(`/api/user/${user_id}`, {
      method: 'DELETE',
    })
    if (!isUserDeleted.body.success) {
      return {
        statusCode: 404,
        body: { success: false, error: 'User not found or deletion failed.' },
      }
    }
    // TODO : mettre cette logique dans le component AlertDeleteSuccess
    // Will force a logout after completing it
    await auth.signOut()
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

const allergy = [
  {
    name: 'Gluten',
    description:
      'Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre, kamut ou leurs souches hybridées) et produits à base de ces céréales',
    selected: false,
  },
  {
    name: 'Crustacés',
    description: 'Et produits à base de crustacés',
    selected: false,
  },
  {
    name: 'Oeufs',
    description: 'Et produits à base d’œufs',
    selected: false,
  },
  {
    name: 'Arachides',
    description: 'Et produits à base d\'arachides',
    selected: false,
  },
  {
    name: 'Poissons',
    description: 'Et produits à base de poissons',
    selected: false,
  },
  {
    name: 'Soja',
    description: 'Et produits à base de soja',
    selected: false,
  },
  {
    name: 'Lait',
    description: 'Et produits à base de lait (y compris de lactose)',
    selected: false,
  },
  {
    name: 'Fruits à coques',
    description:
      'Amandes, noisettes, noix, noix de cajou, pécan, macadamia, du Brésil, du Queensland, pistaches et produits à base de ces fruits',
    selected: false,
  },
  {
    name: 'Céleri',
    description: 'Et produits à base de céleri',
    selected: false,
  },
  {
    name: 'Moutarde',
    description: 'Et produits à base de moutarde',
    selected: false,
  },
  {
    name: 'Graines de sésame',
    description: 'Et produits à base de graines de sésame',
    selected: false,
  },
  {
    name: 'Anhydride sulfureux et sulfites',
    description: 'En concentration de plus de 10 mg/kg ou 10 mg/L',
    selected: false,
  },
]
</script>

<template>
  <main class="main">
    <div v-if="user">
      <div v-if="isModifyAvatarOpened">
        <ModifyAvatar
          :is-opened="isModifyAvatarOpened"
          :close-modify-avatar="closeModifyAvatar"
          :initial-avatar="userAvatar.avatar.avatar_id"
          :user-id="user_id"
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
            class="object-cover object-center h-36 w-full rounded-full border-4 border-white overflow-hidden"
          />
        </div>

        <button
          class="edit-button absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-lg z-10"
          @click="openModifyAvatar"
        >
          <svg
            class="edit-svgIcon h-6 w-6 text-gray-600"
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
          {{ pseudo }}
        </h2>
      </div>

      <form id="profile-details">
        <div class="border-y border-gray-900/10 py-6 my-6">
          <h3 class="text-xl font-semibold leading-7 text-gray-900">
            {{ $t("user.informations") }}
          </h3>
        </div>

        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
            >{{ $t("user.alias") }}</label>
            <div class="mt-2">
              <input
                id="pseudo"
                v-model="pseudo"
                type="text"
                name="pseudo"
                autocomplete="pseudo"
                class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>

          <div>
            <label
              for="firstname"
              class="block text-sm font-medium leading-6 text-gray-900"
            >{{ $t("user.firstname") }}</label>
            <div class="mt-2">
              <input
                id="firstname"
                v-model="firstname"
                type="text"
                name="firstname"
                autocomplete="firstname"
                class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>

          <div>
            <label
              for="lastname"
              class="block text-sm font-medium leading-6 text-gray-900"
            >{{ $t("user.lastname") }}</label>
            <div class="mt-2">
              <input
                id="lastname"
                v-model="lastname"
                type="text"
                name="lastname"
                autocomplete="family-name"
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
                class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>
        </div>

        <div class="border-y border-gray-900/10 py-6 my-6">
          <h3 class="text-xl font-semibold leading-7 text-gray-900">
            {{ $t("user.alimentation") }}
          </h3>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            {{ $t("user.alimentation_explanation") }}
          </p>
        </div>

        <fieldset>
          <div class="card">
            <Accordion v-model:value="active">
              <AccordionPanel value="1">
                <AccordionHeader
                  id="accordion-header"
                  class="flex flex-col sm:flex-row items-start sm:items-center gap-y-3"
                >
                  <div
                    class="text-sm font-semibold leading-6 text-gray-900 col-span-1 sm:w-auto"
                  >
                    {{ $t("user.allergies") }}
                  </div>
                  <div class="flex items-center gap-x-1 col-span-1">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      @click="active = '1'"
                    >
                    <label
                      for="push-email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >{{ $t("user.yes") }}</label>
                  </div>
                  <div class="flex items-center gap-x-1 col-span-1">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      @click="active = '0'"
                    >
                    <label
                      for="push-nothing"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >{{ $t("user.no") }}</label>
                  </div>
                </AccordionHeader>
                <AccordionContent>
                  <div
                    v-for="item in allergy"
                    :key="item.name"
                    class="relative flex gap-x-3"
                  >
                    <div class="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      >
                    </div>
                    <div class="text-sm leading-6">
                      <label
                        for="comments"
                        class="font-medium text-gray-900"
                      >{{
                        item.name
                      }}</label>
                      <p class="text-gray-500">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>

                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 px-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      >
                    </div>
                    <div class="text-sm leading-6 grid grid-cols-2 gap-4">
                      <label
                        for="others"
                        class="font-medium text-gray-900"
                      >{{
                        $t("user.other")
                      }}</label>
                      <input
                        id="others"
                        type="text"
                        name="others"
                        autocomplete="others"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </fieldset>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="min-w-32 mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 hover:bg-gray-50"
          >
            {{ $t("user.cancel") }}
          </button>
          <button
            type="submit"
            class="min-w-32 mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {{ $t("user.save") }}
          </button>
        </div>

        <div
          class="bg-red-100 border-y border-gray-900/10 py-6 my-6 flex items-center justify-between"
        >
          <div>
            <h3 class="text-xl font-semibold leading-7 text-gray-900">
              Delete my profile
            </h3>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              I am sure I want to delete my profile
            </p>
          </div>
          <button
            type="submit"
            class="min-w-32 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            @click="openDeleteAlert"
          >
            Delete my profile
          </button>
        </div>
      </form>
      <AlertDeleteAccount
        v-if="isDeleteAlertVisible"
        class="alert"
        @confirm="confirmDeleteAccount"
        @cancel="closeDeleteAlert"
      />
      <AlertDeleteSuccess
        v-if="deleteAccountSuccess"
        class="alert"
      />
    </div>
    <div v-else>
      <AlertNotLoggedIn class="alert" />
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
</style>
