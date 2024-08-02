<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRuntimeConfig } from '#app';
import Button from 'primevue/button';

interface Celebration {
  name: string;
  description: string;
  author: string;
  date: string;
  hour: string;
  location: string;
}

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { data: celebration, error } = await useFetch<Celebration>(() => `${runtimeConfig.public.apiUrl}/celebration/${route.params.id}`);

if (error.value) {
  console.error('Failed to fetch celebration data', error.value);
}
</script>

<template>
  <main class="main">
    <h1>{{ celebration?.name }}</h1>
    <h2>{{ celebration?.description }}</h2>
    <h3>Proposé par {{ celebration?.author }}</h3>
    <h2>Le {{ celebration?.date }} à {{ celebration?.hour }}</h2>
    <h2>{{ celebration?.location }}</h2>
    <h2>30 participants</h2>

    <div id="event-answer">
      <Button icon="pi pi-check" severity="success" rounded aria-label="Filter" />
      <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" />
      <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
    </div>
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