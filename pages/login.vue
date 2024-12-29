<script setup lang="ts">
import { isAuthApiError } from '@supabase/supabase-js'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const loginSuccess = ref(false)

const { auth } = useSupabaseClient()

const submitLoginForm = async () => {
  try {
    const { data: _data, error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) {
      throw error
    }

    email.value = ''
    password.value = ''

    loginSuccess.value = true
  }
  catch (error) {
    // Vérifie le code et le nom de l'erreur pour gérer différents cas
    if (isAuthApiError(error)) {
      switch (error.code) {
        case '400':
          errorMsg.value
            = 'Erreur de requête. Veuillez vérifier vos informations.'
          break
        case '401':
          errorMsg.value = 'Non autorisé. Vérifiez vos identifiants.'
          break
        default:
          errorMsg.value = 'Erreur d\'authentification inconnue.'
          break
      }
    }
    else if (error) {
      switch ((error as { name: string }).name) {
        case 'InvalidCredentialsError':
          errorMsg.value = 'Identifiants incorrects.'
          break
        case 'NetworkError':
          errorMsg.value = 'Erreur réseau. Veuillez réessayer.'
          break
        default:
          errorMsg.value = 'Erreur d\'authentification du client.'
          break
      }
      setTimeout(() => {
        errorMsg.value = ''
      }, 3000)
    }
  }
}
</script>

<template>
  <main class="main flex flex-col items-center">
    <div class="card flex justify-center" />
    <!-- <h1 class="text-3xl font-bold sm:text-4xl">
      Page login
    </h1> -->
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
              fluid
            />
          </IconField>
          <div
            id="password-forgot"
            class="text-sm"
          >
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
            >{{ $t("login.password_forgot") }}</a>
          </div>
          <span
            v-if="errorMsg"
            class="text-sm text-red-500"
          >{{
            errorMsg
          }}</span>
        </div>
        <Button
          id="sign-in"
          type="submit"
          :label="$t('login.button')"
          class="mt-2 button-validation-form"
          @click="submitLoginForm"
        />
      </div>
    </div>
    <div class="register-container text-xs">
      <p>{{ $t("login.no_account") }}</p>
      <NuxtLink to="/register">
        <p id="sign-up-link">
          {{ $t("login.sign_up") }}
        </p>
      </NuxtLink>
    </div>
    <AlertLoggedIn
      v-if="loginSuccess"
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
#sign-in,
#sign-in * {
  background-color: $indigo;
  color: $seashell;
  border-color: $indigo;
}
#sign-in:hover,
#sign-in:hover * {
  background-color: $tangerine;
  color: $indigo;
  border-color: $indigo;
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
