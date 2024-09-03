<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';

const firstname = ref();
const lastname = ref();
const email = ref();
const password = ref();
const accept = ref(false);

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const registerNewUser = async () => {
  if (!accept.value) {
    alert('Vous devez accepter les termes et conditions.');
    return;
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
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erreur lors de l\'inscription:', data.message);
      alert('Une erreur s\'est produite lors de l\'inscription : ' + data.message);
      return;
    }

    alert('Inscription réussie !');
    router.push('/login'); // Redirige vers la page de connexion
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    alert('Une erreur s\'est produite lors de l\'inscription.');
  }
};
</script>

<template>
  <main class="main flex flex-col items-center">
    <h1 class="text-3xl font-bold sm:text-4xl">Page registration</h1>
    <div id="login" class="card w-full sm:w-80 p-6 mb-6">
        <form class="w-full sm:w-80 flex flex-col gap-6" @submit.prevent="registerNewUser">
            <IconField>
                <InputIcon>
                    <i class="pi pi-user" />
                </InputIcon>
                <InputText id="firstname" v-model="firstname" type="text" placeholder="Firstname" autofocus fluid />
            </IconField>

            <IconField>
                <InputIcon>
                    <i class="pi pi-user" />
                </InputIcon>
                <InputText id="lastname" v-model="lastname" type="text" placeholder="Lastname" autofocus fluid />
            </IconField>

            <IconField>
                <InputIcon>
                    <i class="pi pi-envelope" />
                </InputIcon>
                <InputText id="email" v-model="email" type="email" placeholder="Email" fluid />
            </IconField>

            <IconField>
                <InputIcon>
                    <i class="pi pi-key" />
                </InputIcon>
                <InputText id="password1" v-model="password" type="password" placeholder="Password" fluid />
            </IconField>

            <!-- <IconField>
                <InputIcon>
                    <i class="pi pi-key" />
                </InputIcon>
                <InputText id="password2" v-model="email" type="email" placeholder="Rewrite your password" fluid />
            </IconField> -->

            <div class="flex items-center gap-2">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions.</label>
            </div>

        <Button type="submit" id="sign-up-button" label="Sign Up" icon="pi pi-user-plus" class="mt-2" />

        </form>
    </div>
  </main>
</template>

<style>
#sign-up-button {
  background-color: #180161;
  color: #ffa96a;
  border-color: #180161;
}
#sign-up-button:hover {
  background-color: #ffa96a;
  color: #180161;
  border-color: #180161;
}

@media (min-width: 1024px) {
  .main {
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
  .main {
    width: 80%; /* Définit la largeur à 80% de l'écran sur les smartphones */
    margin-left: auto;
    margin-right: auto;
  }
}
</style>