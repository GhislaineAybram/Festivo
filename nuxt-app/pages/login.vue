<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';

const email = ref();
const password = ref();

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const submitRegisterForm = async () => {
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
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur lors de la connexion:', errorData.message);
      alert('Une erreur s\'est produite lors de la connexion : ' + errorData.message);
      return;
    };

    const data = await response.json();
    alert(data.message || 'Login successful!');
    router.push('/');
  } catch (error) {
    console.error('Login error:', error);
    alert('Une erreur s\'est produite lors de la connexion.');
  }
};

</script>

<template>
  <main class="main">
    <h1>Page login</h1>
    <div id="login" class="card flex justify-center">
        <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
            <IconField>
                <InputIcon>
                    <i class="pi pi-user" />
                </InputIcon>
                <InputText id="username" v-model="email" type="text" placeholder="Username" autofocus fluid />
            </IconField>

            <IconField>
                <InputIcon>
                    <i class="pi pi-key" />
                </InputIcon>
                <InputText id="password" v-model="password" type="password" placeholder="Password" fluid />
            </IconField>

            <Button type="submit" label="Submit" class="mt-2" @click="submitRegisterForm" />
        </div>
    </div>
    <div class="w-full md:w-5/12 flex items-center justify-center py-5">
      <p>Don't have an account yes ?</p>
      <NuxtLink to="/register">
        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-full max-w-[17.35rem] mx-auto"/>
      </NuxtLink>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .main {
    margin-top: 59px;
    display: flex;
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