<script setup lang="ts">
/**
 * @component components/MenubarCompo.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This component is the navigation bar of Festivo website.
 *
 * @example
 * <MenubarCompo />
 */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import type { UserWithAvatar } from '~/types'

const { setLocale } = useI18n()
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()

const { auth } = useSupabaseClient()
const user = useSupabaseUser()
const metadata = computed(() => user.value?.user_metadata || {})
const alias = ref(metadata.value?.alias || '')
// Initialize user avatar
const avatar = ref('pi pi-user')

// Watch for user changes to update alias
watch(() => user.value, (newUser) => {
  if (newUser) {
    const updatedMetadata = newUser.user_metadata
    alias.value = updatedMetadata?.alias || ''
  }
}, { immediate: true })

/**
 * Fetch and update user avatar when user ID is available
 */
watch(() => user.value, async (newUser) => {
  if (newUser && newUser.id) {
    const { data: userAvatar, error: userAvatarError } = await useFetch<UserWithAvatar>(
      () => `${runtimeConfig.public.apiUrl}/user/${newUser.id}`,
    )

    if (userAvatarError.value) {
      // Fallback to default icon
      avatar.value = 'pi pi-user'
    }
    else {
      avatar.value = userAvatar.value?.avatar?.picture || 'pi pi-user'
    }
  }
  else {
    avatar.value = 'pi pi-user'
  }
}, { immediate: true })

/**
 * Sign out the current user and redirect to login page
 */
const userLogout = async () => {
  await auth.signOut()
  user.value = null
  alias.value = null
  navigateTo('/login')
}

/**
 * Get the appropriate profile page URL
 * @returns {string} URL to the user's profile or homepage
 */
const getProfilePage = () => {
  return user.value ? `/profile/${user.value.id}` : '/'
}

/**
 * Dynamic navigation links based on authentication status
 */
const navigation = computed(() => {
  const baseLinks = [
    { name: t('menubar.homepage'), href: '/', current: false },
    {
      name: t('menubar.event_creation'),
      href: '/celebrationadmin/creation',
      current: false,
    },
  ]

  // Add login link only for unauthenticated users
  if (!user) {
    baseLinks.push({
      name: t('menubar.login'),
      href: '/login',
      current: false,
    })
  }

  return baseLinks
})

/**
 * Available languages with display information
 */
const languages = [
  {
    code: 'fr',
    name: 'Français',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  },
  {
    code: 'en',
    name: 'English',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
]

// Initialize reactive language state
const currentLocale = ref('fr')
const currentFlag = ref(
  'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
)

/**
 * Change the application language and update user preferences
 * @param code - Language code ('en' or 'fr')
 */
const changeLanguage = async (code: 'en' | 'fr') => {
  // Update i18n locale configuration
  setLocale(code)
  // Update local reactive state for UI rendering
  currentLocale.value = code
  // Update flag icon based on selected language
  currentFlag.value
    = languages.find(lang => lang.code === code)?.flag || currentFlag.value
  // Persist user language preference in database through auth service
  const { error } = await auth.updateUser({
    data: { language: code },
  })
  if (error) {
    console.error('Error updating user preference language:', error)
  }
}

// Initialize language preference from user metadata on page load
if (metadata.value?.language) {
  setLocale(metadata.value.language)
  currentLocale.value = metadata.value.language
  currentFlag.value = languages.find(lang => lang.code === metadata.value.language)?.flag || currentFlag.value
}
</script>

<template>
  <Disclosure
    id="menuBar"
    v-slot="{ open }"
    as="nav"
    class="bg-gray-800"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <XMarkIcon
              v-else
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>

        <!-- Desktop Navigation -->
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-6 w-auto"
              src="../public/img/logo-horizontal-Festivo-seashell.png"
              alt="Logo site Festivo"
            >
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</a>
            </div>
          </div>
        </div>

        <!-- Menu Langues + Utilisateur -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="flex items-center space-x-6">
            <p
              class="relative hidden sm:ml-6 sm:block text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
            >
              {{ $t("welcome.title") }} {{ alias }} !
            </p>
            <!-- Dropdown pour sélection de langue -->
            <Menu
              as="div"
              class="relative hidden sm:ml-6 sm:block"
            >
              <MenuButton
                class="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none"
              >
                <img
                  :src="currentFlag"
                  :alt="currentLocale"
                  class="h-6 w-8 object-cover rounded-md"
                >
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem>
                    <div
                      class="flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                      @click="changeLanguage('fr')"
                    >
                      <img
                        alt="Français"
                        src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
                        class="w-6 h-4 object-cover mr-2"
                      >
                      Français
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div
                      class="flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                      @click="changeLanguage('en')"
                    >
                      <img
                        alt="English"
                        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                        class="w-6 h-4 object-cover mr-2"
                      >
                      English
                    </div>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>

            <!-- Profile dropdown -->
            <Menu
              as="div"
              class="relative ml-3"
            >
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-gray-800 text-sm ring-1 ring-white"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <Avatar
                    v-if="user"
                    id="avatar-picture"
                    class="h-10 w-10 rounded-full"
                    :style="{ backgroundImage: `url(${avatar})` }"
                    shape="circle"
                  />
                  <Avatar
                    v-else
                    icon="pi pi-user"
                    class="h-8 w-8 rounded-full"
                    style="background-color: #fff6f0; color: #180161"
                    shape="circle"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      :href="getProfilePage()"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                    >{{ $t("menubar.profile") }}</a>
                  </MenuItem>
                  <MenuItem
                    v-if="user"
                    v-slot="{ active }"
                  >
                    <a
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                      ]"
                      @click="userLogout"
                    >{{ $t("menubar.sign_out") }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <hr
          class="border-gray-700"
          style="margin: 0 0 30px 0"
        >

        <p
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          {{ $t("welcome.title") }} {{ alias }} !
        </p>

        <hr
          class="border-gray-700"
          style="margin: 30px 0"
        >

        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>

        <hr
          class="border-gray-700"
          style="margin: 30px 0"
        >

        <DisclosureButton
          as="div"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded px-3 py-2 text-base font-medium"
          @click="changeLanguage('fr')"
        >
          <div class="flex items-center gap-3 px-1 cursor-pointer">
            <img
              alt="Français"
              src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
              class="flag flag-fr"
              style="width: 24px"
            >
            <span class="text-gray-300 hover:text-white">FR</span>
          </div>
        </DisclosureButton>

        <DisclosureButton
          as="div"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          @click="changeLanguage('en')"
        >
          <div class="flex items-center gap-3 px-1 cursor-pointer">
            <img
              alt="English"
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              class="flag flag-en"
              style="width: 24px"
            >
            <span class="text-gray-300 hover:text-white">EN</span>
          </div>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style lang="scss" scoped>
#menuBar {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
.cursor-pointer {
  cursor: pointer;
}
#avatar-picture {
  background-color: $seashell;
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
