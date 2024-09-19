<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

const email = ref()
const password = ref()

const router = useRouter()
const runtimeConfig = useRuntimeConfig()

async function submitRegisterForm() {
  try {
    const response = await fetch(`${runtimeConfig.public.apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Erreur lors de la connexion:', errorData.message)
      alert('Une erreur s\'est produite lors de la connexion : ' + errorData.message)
      return
    };

    const data = await response.json()
    alert(data.message || 'Login successful!')
    router.push('/')
  }
  catch (error) {
    console.error('Login error:', error)
    alert('Une erreur s\'est produite lors de la connexion.')
  }
};
</script>

<template>
  <main class="main flex flex-col items-center">
    <h1 class="text-3xl font-bold sm:text-4xl">
      Page login
    </h1>
    <div
      id="login"
      class="card w-full sm:w-80 p-6 mb-6"
    >
      <div
        v-focustrap
        class="w-full sm:w-80 flex flex-col gap-6"
      >
        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText
            id="username"
            v-model="email"
            type="text"
            placeholder="Email address"
            autofocus
            fluid
          />
        </IconField>

        <IconField>
          <InputIcon>
            <i class="pi pi-key" />
          </InputIcon>
          <InputText
            id="password"
            v-model="password"
            type="password"
            placeholder="Password"
            fluid
          />
        </IconField>

        <Button
          id="sign-in"
          type="submit"
          label="Sign in"
          class="mt-2 button-validation"
          @click="submitRegisterForm"
        />
      </div>
    </div>
    <div class="register-container">
      <p>Don't have an account yes ?</p>
      <NuxtLink to="/register">
        <p id="sign-up-link">
          Sign up
        </p>
      </NuxtLink>
    </div>
  </main>
</template>

<style  lang="scss" scoped>
#login {
    border-radius: 1rem;
    border-color: $tangerine;
    padding: 2rem;
    margin-top: 59px;
    border-width: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.register-container {
  display: flex; /* Utilisez Flexbox pour aligner les éléments */
  justify-content: center; /* Espacement entre les éléments */
  align-items: center; /* Aligner les éléments verticalement au centre */
  width: 80%; /* Optionnel : ajuste la largeur du conteneur */
  margin-top: 1rem; /* Optionnel : espace au-dessus */
  margin-left: 1rem; /* Centre le conteneur horizontalement */
  margin-right: 1rem; /* Centre le conteneur horizontalement */
  gap: 0.5rem;
}
h1 {
  background-color: $tangerine;
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
}
#sign-in {
  background-color: $indigo;
  color: $seashell;
  border-color: $indigo;
}
#sign-in:hover {
  background-color: $tangerine;
  color: $indigo;
  border-color: $indigo;
}
#sign-up-link {
  font-weight: bold;
  color: $indigo;
}

@media (min-width: 1024px) {
  #login {
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
  #login {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
