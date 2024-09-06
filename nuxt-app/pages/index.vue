<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { data: session, pending, error } = await useFetch(`${runtimeConfig.public.apiUrl}/auth/session`, {
  headers: useRequestHeaders(['cookie']),
});

const loggedIn = computed(() => !!session.value?.user);
const userFirstname = computed(() => session.value?.user?.firstname || '');
</script>

<template>
  <main class="main">
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-if="loggedIn">
        <h1>Welcome {{ userFirstname }}!</h1>
      </div>
      <div v-else>
        <h1>Not logged in</h1>
        <NuxtLink to="login">Login with password</NuxtLink>
      </div>
    </div>
  </main>
</template>
  
<style  lang="scss" scoped>
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