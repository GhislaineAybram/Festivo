<script setup lang="ts">
/**
 * @file pages/login.vue
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Authentication page for existing users :
 * - Email/password authentication
 * - Password reset link
 *
 * @route /login
 * @auth public
 */

const route = useRoute()
const router = useRouter()
const redirectPath = ref(route.query.redirect || '/')

const { t } = useI18n()

useHead({
  meta: [
    { name: 'description', content: t('metadescription.login') },
  ],
})
const toast = useToast()
const { auth } = useSupabaseClient()

// Form inputs
const email = ref<string>('')
const password = ref<string>('')
const errorMsg = ref<string>('')
const loginSuccess = ref<boolean>(false)

/**
 * Handles the login form submission
 * - Authenticates user with email & password
 * - Displays success or error messages
 */
const submitLoginForm = async () => {
  try {
    const { data: _data, error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) {
      throw new Error('Unable to process your request. Please try again later.')
    }

    // Clear form inputs
    email.value = ''
    password.value = ''

    // Show success message
    loginSuccess.value = true
    toast.add({
      severity: 'success',
      summary: t('login.successfull'),
      detail: t('login.success_message'),
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
</script>

<template>
  <main class="main flex flex-col items-center">
    <div class="card flex justify-center" />
    <div
      id="login"
      class="card w-full sm:w-80 p-6 mb-6"
    >
      <div
        id="login-container"
        v-focustrap
        class="w-full sm:w-80 flex flex-col gap-6"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-14 w-auto"
            src="../public/img/boule-disco-indigo.png"
            alt="Logo Festivo"
          >
          <h3
            class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            {{ $t("login.title") }}
          </h3>
        </div>
        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText
            id="email"
            v-model="email"
            class="text"
            type="text"
            :placeholder="$t('user.email')"
            autofocus
            size="small"
            fluid
          />
        </IconField>

        <div class="password-container">
          <IconField>
            <InputIcon>
              <i class="pi pi-key" />
            </InputIcon>
            <InputText
              id="password"
              v-model="password"
              class="text"
              type="password"
              :placeholder="$t('user.password')"
              size="small"
              fluid
            />
          </IconField>
          <div
            id="password-forgot"
            class="text-sm"
          >
            <NuxtLink to="/resetpassword">
              <p
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >{{ $t("login.password_forgot") }}</p>
            </NuxtLink>
          </div>
          <span
            v-if="errorMsg"
            class="text-sm text-red-500"
          >{{
            errorMsg
          }}</span>
        </div>
        <button
          id="sign-in"
          type="submit"
          label="sign-in-button"
          class="button-action"
          @click="submitLoginForm"
        >
          {{ $t('login.button') }}
        </button>
      </div>
    </div>
    <Toast />
    <div class="register-container text-xs">
      <p>{{ $t("login.no_account") }}</p>
      <NuxtLink
        :to="{
          path: '/register',
          query: { redirect: redirectPath },
        }"
      >
        <p id="sign-up-link">
          {{ $t("login.sign_up") }}
        </p>
      </NuxtLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h3 {
  color: $indigo;
  font-size: xx-large;
}
.text {
  color: $indigo;
}
#login {
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
#login *, a, a:hover {
  background-color: white;
}
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 0.5rem;
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
#sign-up-link {
  font-weight: bold;
  color: $indigo;
}
#password-forgot {
  padding-top: 5px;
  text-align: right;
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
  #login {
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
  #login {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
