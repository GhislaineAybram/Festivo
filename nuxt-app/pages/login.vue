<script setup lang="ts">
import { AuthApiError } from '@supabase/supabase-js'
import AlertLoggedIn from '~/components/AlertLoggedIn.vue'

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
    if (error instanceof AuthApiError) {
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
    else if (error.name === 'CustomAuthError') {
      switch (error.name) {
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
            class="mx-auto h-10 w-auto"
            src="../public/img/disco-ball-tangerine.png"
            alt="Logo Festify"
          >
          <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            {{ $t("login.title") }}
          </h2>
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
          class="mt-2 button-validation"
          @click="submitLoginForm"
        />
      </div>
    </div>
    <div class="register-container text-sm">
      <p>{{ $t("login.no_account") }}</p>
      <NuxtLink to="/register">
        <p id="sign-up-link">
          {{ $t("login.sign_up") }}
        </p>
      </NuxtLink>
    </div>
    <AlertLoggedIn
      v-if="loginSuccess"
      class="alert-registration"
    />
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h2 {
  color: $indigo;
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
#login * {
  background-color: white;
}
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 1rem;
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
.alert-registration {
  position: absolute;
  top: 50%;
  left: 50%;
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
