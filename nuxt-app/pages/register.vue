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
    const response = await fetch(`${runtimeConfig.public.apiUrl}/register`, {
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
  <main class="main">
    <h1>Page registration</h1>
    <div id="login" class="card flex justify-center">
        <form @submit.prevent="registerNewUser" class="w-full sm:w-80 flex flex-col gap-6">
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

            <Button type="submit" label="Send" class="mt-2" />
        </form>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .main {
    margin-top: 59px;
  }
  #login {
    border-radius: 2rem;
    padding: 2rem;
    margin-top: 59px;
    border-width: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
</style>