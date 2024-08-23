<script setup lang="ts">
import { ref } from 'vue';

const username = ref();
const password = ref();
const accept = ref(false);
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
                <InputText id="username" v-model="username" type="text" placeholder="Username" autofocus fluid />
            </IconField>

            <IconField>
                <InputIcon>
                    <i class="pi pi-key" />
                </InputIcon>
                <InputText id="password" v-model="password" type="password" placeholder="Password" fluid />
            </IconField>

            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
    <p><NuxtLink to="/register">Don't have an account yes ? Go register</NuxtLink></p>
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