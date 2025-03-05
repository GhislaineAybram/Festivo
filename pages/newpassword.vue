<script setup lang="ts">
/**
 * @file pages/newpassword.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @fileoverview Provides a secure interface for users to define a new password.
 *
 * @description
 * Password reset completion page :
 * - Enter and confirm new password
 * - Get redirected after successful reset
 *
 * @route /newpassword
 * @auth required (by clicking on link received by email)
 */

import AlertNewPassword from '~/components/AlertNewPassword.vue'

const { t } = useI18n()

useHead({
  meta: [
    { name: 'description', content: t('metadescription.newpassword') },
  ],
})

const user = useSupabaseUser()

// Form inputs
const email = ref<string>('')
const new_password = ref<string>('')
const confirmPassword = ref<string>('')
const errorMsg = ref<string>('')
const updateSuccess = ref<boolean>(false)

const { auth } = useSupabaseClient()

/**
 * Automatically fills in the user's email if logged in.
 */
watchEffect(() => {
  if (user.value) {
    email.value = user.value.email || ''
  }
})

/**
 * Handles the password reset form submission.
 * - Validates the password confirmation.
 * - Ensures password meets security requirements.
 * - Updates the user's password via Supabase.
 */
const submitNewPasswordForm = async () => {
  // Validate password match
  if (new_password.value !== confirmPassword.value) {
    return showError(errorMsg, t('register.error.match'))
  }

  // Validate password strength
  const { isValidPassword, errorMessagePassword } = validatePassword(new_password.value, t)
  if (!isValidPassword) {
    return showError(errorMsg, errorMessagePassword)
  }

  // Verify user is automatically logged in
  if (!user.value) {
    return showError(errorMsg, t('register.error.session'))
  }

  try {
    const { error } = await auth.updateUser({
      password: new_password.value,
    })
    if (error) {
      throw new Error('Unable to process your request. Please try again later.')
    }

    // Clear form after a successful update
    new_password.value = ''
    confirmPassword.value = ''
    updateSuccess.value = true
  }
  catch (error) {
    errorMsg.value = (error as { message: string }).message
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
  }
}
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
        @submit.prevent="submitNewPasswordForm"
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
            {{ $t("new_password.title") }}
          </h3>
        </div>

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
            readonly
          />
        </IconField>

        <IconField>
          <InputIcon>
            <i class="pi pi-key" />
          </InputIcon>
          <InputText
            id="password1"
            v-model="new_password"
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
        />
        <span
          v-if="errorMsg"
          class="text-sm text-red-500"
        >{{ errorMsg }}</span>
        <button
          id="new-password-button"
          type="submit"
          label="new-password-button"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-1 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {{ $t('new_password.button') }}
        </button>
      </form>
    </div>
    <AlertNewPassword
      v-if="updateSuccess"
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
#new-password-button, #new-password-button * {
  background-color: $indigo;
  color: $seashell;
  border-color: $indigo;
}
#new-password-button:hover, #new-password-button:hover * {
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
