<script setup lang="ts">
const config = useRuntimeConfig();
const { data } = await useFetch(`${config.public.apiUrl}`);
</script>

<template>
  <main class="main">
    <h1>This is the homepage {{ data }}</h1>
  </main>
</template>
  
<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    .main {
    margin-top: 59px;
  }
  }
</style>