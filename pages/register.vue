<script setup lang="ts">
/**
 * @file pages/register.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * User registration page for creating a new account :
 * - Username, email and password validation
 * - Terms and conditions acceptance
 *
 * @route /register
 * @auth public
 */

const { t } = useI18n()

useHead({
  meta: [
    { name: 'description', content: t('metadescription.register') },
  ],
})
const route = useRoute()
const router = useRouter()
const redirectPath = ref(route.query.redirect || '/dashboard')

const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

// Form inputs
const alias = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')
const accept = ref<boolean>(false)
const errorMsg = ref<string>('')
const registrationSuccess = ref<boolean>(false)

/**
 * Handles the registration form submission
 * Validates user inputs and attempts to register the user via Supabase
 */
const submitRegisterForm = async () => {
  // Validate alias format
  const { isValidAlias, errorMessageAlias } = validateAlias(alias.value, t)
  if (!isValidAlias) {
    return showError(errorMsg, errorMessageAlias)
  }

  // Check if alias already exists in the database
  const { data: aliasExists } = await useFetch<boolean>(`${runtimeConfig.public.apiUrl}/users/check/alias`, {
    method: 'POST',
    body: {
      alias: alias.value,
    },
  })

  if (aliasExists.value) {
    return showError(errorMsg, t('register.error.alias-exists'))
  }

  // Check if the email already exists in the database
  const { data: emailExists } = await useFetch<boolean>(`${runtimeConfig.public.apiUrl}/users/check/email`, {
    method: 'POST',
    body: {
      email: email.value,
    },
  })

  if (emailExists.value) {
    return showError(errorMsg, t('register.error.email-exists'))
  }

  // Validate password match
  if (password.value !== confirmPassword.value) {
    password.value = ''
    confirmPassword.value = ''
    return showError(errorMsg, t('register.error.match'))
  }

  // Validate password strength
  const { isValidPassword, errorMessagePassword } = validatePassword(password.value, t)
  if (!isValidPassword) {
    return showError(errorMsg, errorMessagePassword)
  }

  // Ensure user accepts terms and conditions
  if (!accept.value) {
    return showError(errorMsg, t('register.error.agree'))
  }

  // Attempt user registration
  try {
    const { error } = await auth.signUp({
      email: email.value.toLowerCase(),
      password: password.value,
      options: {
        data: {
          alias: alias.value,
        },
      },
    })

    if (error) {
      throw new Error('Unable to process your request. Please try again later.')
    }

    // Clear form
    alias.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''

    registrationSuccess.value = true
    toast.add({
      severity: 'success',
      summary: t('register.successfull'),
      detail: t('register.success_message'),
      life: 3000,
    })

    // Redirect user after successful login
    setTimeout(() => {
      router.push(redirectPath.value.toString())
    }, 1000)
  }
  catch (error) {
    errorMsg.value = (error as { message: string }).message
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
  }
}

// Redirect user if already logged in
watchEffect(() => {
  if (user.value) {
    console.log('User logged in, redirecting to home')
  }
})
</script>

<template>
  <main class="main flex flex-col items-center">
    <div class="card flex justify-center" />
    <div
      id="register"
      class="card w-full sm:w-80 p-6 mb-6"
    >
      <form
        v-focustrap
        class="w-full sm:w-80 flex flex-col gap-4"
        @submit.prevent="submitRegisterForm"
      >
        <div
          id="form-inside"
          class="sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <img
            class="mx-auto h-14 w-auto"
            src="../public/img/boule-disco-indigo.png"
            alt="Logo Festivo"
          >
          <h3
            class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            {{ $t("register.title") }}
          </h3>
        </div>

        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText
            id="alias"
            v-model="alias"
            v-tooltip.focus.bottom="{
              value: $t('register.error.alias-rules'),
              class: 'bg-primary text-xs p-2 max-w-[200px]',
            }"
            class="text"
            type="text"
            :placeholder="$t('user.alias')"
            size="small"
            fluid
          />
        </IconField>

        <IconField>
          <InputIcon>
            <i class="pi pi-envelope" />
          </InputIcon>
          <InputText
            id="email"
            v-model="email"
            class="text"
            type="email"
            :placeholder="$t('user.email')"
            size="small"
            fluid
          />
        </IconField>

        <IconField>
          <InputIcon>
            <i class="pi pi-key" />
          </InputIcon>
          <InputText
            id="password1"
            v-model="password"
            v-tooltip.focus.top="{
              value: $t('register.error.password-rules'),
              class: 'bg-primary text-xs p-2 max-w-[200px]',
            }"
            class="text"
            type="password"
            :placeholder="$t('user.password')"
            size="small"
            fluid
          />
        </IconField>

        <IconField>
          <InputIcon>
            <i class="pi pi-key" />
          </InputIcon>
          <InputText
            id="password2"
            v-model="confirmPassword"
            class="text"
            type="password"
            :placeholder="$t('user.password_confirmed')"
            size="small"
            fluid
          />
        </IconField>

        <div
          id="accept-conditions"
          class="flex items-center gap-2 text-xs"
        >
          <Checkbox
            id="accept"
            v-model="accept"
            name="accept"
            value="Accept"
          />
          <label
            id="accept-label"
            for="accept"
          >
            <i18n-t keypath="register.agree.text">
              <a href="https://festivo-tawny.vercel.app/privacy">
                {{ $t('register.agree.link_text') }}
              </a>
            </i18n-t>
          </label>
        </div>
        <span
          v-if="errorMsg"
          class="text-sm text-red-500"
        >{{ errorMsg }}</span>
        <button
          id="sign-up-button"
          type="submit"
          label="sign-up-button"
          icon="pi pi-user-plus"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-1 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {{ $t('register.button') }}
        </button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h3 {
  color: $indigo;
  background-color: white;
  font-size: xx-large;
}
.text {
  color: $indigo;
}
#register {
  border-radius: 1rem;
  border-color: $tangerine;
  padding: 1.5rem;
  margin-top: 59px;
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: white;
}
#register, a, a:hover, #register form, #accept-conditions, #accept-label, #form-inside, #form-inside img, span *, span {
  background-color: white;
}
#sign-up-button, #sign-up-button * {
  background-color: $indigo;
  color: $seashell;
  border-color: $indigo;
}
#sign-up-button:hover, #sign-up-button:hover * {
  background-color: $tangerine;
  color: $indigo;
  border-color: $indigo;
}
#accept-conditions {
  color: $indigo;
}
h1 {
  background-color: $tangerine;
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
}
a {
  color: $indigo;
  text-decoration: underline;
  text-decoration-color: $indigo;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}
a:hover {
  color: $grey;
  text-decoration-color: $grey;
}
@media (min-width: 1024px) {
  #register {
    margin-top: 59px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 424px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 100%;
  }
}
@media (max-width: 600px) {
  #register {
    width: 80%; /* Définit la largeur à 80% de l'écran sur les smartphones */
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
