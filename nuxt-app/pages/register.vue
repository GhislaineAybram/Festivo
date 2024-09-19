<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

const firstname = ref()
const lastname = ref()
const email = ref()
const password = ref()
const accept = ref(false)

const router = useRouter()
const runtimeConfig = useRuntimeConfig()

async function registerNewUser() {
  if (!accept.value) {
    alert('Vous devez accepter les termes et conditions.')
    return
  }

  try {
    const response = await fetch(`${runtimeConfig.public.apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Erreur lors de l\'inscription:', data.message)
      alert('Une erreur s\'est produite lors de l\'inscription : ' + data.message)
      return
    }

    alert('Inscription réussie !')
    router.push('/login') // Redirige vers la page de connexion
  }
  catch (error) {
    console.error('Erreur lors de l\'inscription:', error)
    alert('Une erreur s\'est produite lors de l\'inscription.')
  }
};
</script>

<template>
  <main class="main flex flex-col items-center">
    <h1 class="text-3xl font-bold sm:text-4xl">
      Page registration
    </h1>
    <div
      id="register"
      class="card w-full sm:w-80 p-6 mb-6"
    >
      <form
        class="w-full sm:w-80 flex flex-col gap-6"
        @submit.prevent="registerNewUser"
      >
        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText
            id="firstname"
            v-model="firstname"
            type="text"
            placeholder="Firstname"
            autofocus
            fluid
          />
        </IconField>

        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText
            id="lastname"
            v-model="lastname"
            type="text"
            placeholder="Lastname"
            autofocus
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
            type="email"
            placeholder="Email"
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
            type="password"
            placeholder="Password"
            fluid
          />
        </IconField>

        <!-- <IconField>
                <InputIcon>
                    <i class="pi pi-key" />
                </InputIcon>
                <InputText id="password2" v-model="email" type="email" placeholder="Rewrite your password" fluid />
            </IconField> -->

        <div class="flex items-center gap-2">
          <Checkbox
            id="accept"
            v-model="accept"
            name="accept"
            value="Accept"
          />
          <label for="accept">I agree to the terms and conditions.</label>
        </div>

        <Button
          id="sign-up-button"
          type="submit"
          label="Sign Up"
          icon="pi pi-user-plus"
          class="mt-2"
        />
      </form>
    </div>
  </main>
</template>

<style  lang="scss" scoped>
#register {
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
#sign-up-button {
  background-color: $indigo;
  color: $seashell;
  border-color: $indigo;
}
#sign-up-button:hover {
  background-color: $tangerine;
  color: $indigo;
  border-color: $indigo;
}
h1 {
  background-color: $tangerine;
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
}
@media (min-width: 1024px) {
  #register {
    margin-top: 59px;
    display: flex;
    flex-direction: column; /* Ajoutez cette ligne pour s'assurer que les éléments enfants soient en colonne */
    align-items: center; /* Centrer horizontalement les enfants */
    max-width: 1024px; /* Limitez la largeur maximale à 1024px */
    margin-left: auto; /* Centre horizontalement le conteneur */
    margin-right: auto; /* Centre horizontalement le conteneur */
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
