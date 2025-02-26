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

const user = useSupabaseUser()
const alias = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMsg = ref('')
const accept = ref(false)
const registrationSuccess = ref(false)

const { auth } = useSupabaseClient()
const { t } = useI18n()

const runtimeConfig = useRuntimeConfig()

const submitRegisterForm = async () => {
  // verify if the alias respect the rules
  const { isValidAlias, errorMessageAlias } = validateAlias(alias.value, t)
  if (!isValidAlias) {
    errorMsg.value = errorMessageAlias
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
    return
  }

  // verify if the alias already exists in the database
  const { data: aliasData } = await useFetch<boolean>(`${runtimeConfig.public.apiUrl}/users/check/alias`, {
    method: 'POST',
    body: {
      alias: alias.value,
    },
  })

  if (aliasData.value) {
    errorMsg.value = t('register.error.alias-exists')
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
    return
  }

  // verify if the email already exists in the database
  const { data: emailData } = await useFetch<boolean>(`${runtimeConfig.public.apiUrl}/users/check/email`, {
    method: 'POST',
    body: {
      email: email.value,
    },
  })

  if (emailData.value) {
    errorMsg.value = t('register.error.email-exists')
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
    return
  }

  // verify both password fields are identical
  if (password.value !== confirmPassword.value) {
    errorMsg.value = t('register.error.match')
    password.value = ''
    confirmPassword.value = ''
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
    return
  }

  // verify if the password respect the security rules
  const { isValidPassword, errorMessagePassword } = validatePassword(password.value, t)
  if (!isValidPassword) {
    errorMsg.value = errorMessagePassword
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
    return
  }

  // verify if the user agrees terms and conditions
  if (!accept.value) {
    errorMsg.value = t('register.error.agree')
    return
  }

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

    if (error) throw error

    // Clear form
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    alias.value = ''

    registrationSuccess.value = true
    console.log('User signed up successfully')
  }
  catch (error) {
    console.error('Sign up error:', error)
    errorMsg.value = (error as { message: string }).message
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
  }
}

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
    <AlertRegistration
      v-if="registrationSuccess"
      class="alert"
    />
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
