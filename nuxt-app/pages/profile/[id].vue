<script setup lang="ts">
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'

definePageMeta({
  middleware: 'auth',
})

const { auth } = useSupabaseClient()
const {
  data: { user },
} = await auth.getUser()
const metadata = user?.user_metadata

const pseudo = computed(() => metadata?.nickname || '')
const firstname = computed(() => metadata?.firstname || '')
const lastname = computed(() => metadata?.lastname || '')
const email = computed(() => user?.email || '')

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
      <div id="photo-title-profile">
        <div id="photo-profile">
          <img
            id="profile-picture"
            class="inline-block h-40 w-40 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar"
          >
          <button class="edit-button">
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
        <h1
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
        >
          {{ $t("welcome.title") }} {{ firstname }} !
        </h1>
      </div>
      <form id="profile-details">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              {{ $t("user.informations") }}
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <!-- <div class="col-span-full"> -->
              <!-- <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo de profil</label>
          <div class="mt-2 flex items-center gap-x-3">
            <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg> -->
              <!-- <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Modifier</button> -->
              <!-- </div>
        </div> -->

              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-3">
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >{{ $t("user.alias") }}</label>
                  <div class="mt-2">
                    <input
                      id="firstname"
                      v-model="pseudo"
                      type="text"
                      name="firstname"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                  </div>
                </div>

                <div class="sm:col-span-3">
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
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                  </div>
                </div>

                <div class="sm:col-span-3">
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

                <div class="sm:col-span-3">
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
            </div>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              {{ $t("user.alimentation") }}
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              {{ $t("user.alimentation_explanation") }}
            </p>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 space-y-10">
              <fieldset>
                <Disclosure>
                  <div
                    class="text-sm leading-6 grid grid-cols-4 gap-2 items-center"
                  >
                    <legend
                      class="text-sm font-semibold leading-6 text-gray-900 col-span-2"
                    >
                      {{ $t("user.allergies") }}
                    </legend>

                    <div class="flex items-center gap-x-3 col-span-1">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      >
                      <label
                        for="push-email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >{{ $t("user.yes") }}</label>
                    </div>
                    <div class="flex items-center gap-x-3 col-span-1">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      >
                      <label
                        for="push-nothing"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >{{ $t("user.no") }}</label>
                    </div>
                    <div class="col-span-1 flex justify-end">
                      <DisclosureButton
                        class-name="group flex w-full items-center justify-between"
                      >
                        <!-- <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> -->
                      </DisclosureButton>
                    </div>
                  </div>

                  <DisclosurePanel class="mt-2 text-gray-600">
                    <div class="mt-6 space-y-6">
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
                          >{{ item.name }}</label>
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
                            for="offers"
                            class="font-medium text-gray-900"
                          >{{ $t("user.other") }}</label>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                        </div>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </fieldset>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            {{ $t("user.cancel") }}
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {{ $t("user.save") }}
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      <AlertNotLoggedIn />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
#photo-title-profile {
  position: relative;
}
#photo-profile {
  position: relative;
  display: inline-block;
}
#profile-picture {
  z-index: -1;
  position: relative;
  transform: scale(0.85);
}
h1 {
  background-color: $seashell;
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.edit-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $indigo;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: absolute;
  bottom: 15px;
  right: 15px;
  text-decoration: none !important;
}
.edit-svgIcon {
  width: 14px;
}
.edit-svgIcon path {
  fill: white;
}
@media (min-width: 1024px) {
  #profile-details {
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
  #profile-details {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
