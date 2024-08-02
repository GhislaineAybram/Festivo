<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRuntimeConfig } from '#app';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  added_datetime: string;
}

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { data: user, error } = await useFetch<User>(() => `${runtimeConfig.public.apiUrl}/user/${route.params.id}`);

if (error.value) {
  console.error('Failed to fetch user profile', error.value);
}
</script>

<template>
  <main class="main">
    <h1>Bienvenue {{ user?.firstname }} {{ user?.lastname }} !</h1>
    <ProfileInformations />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .main {
    margin-top: 59px;
    display: flex;
  }
}
</style>