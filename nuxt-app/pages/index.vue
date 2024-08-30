<script setup lang="ts">
const { loggedIn, user, session, fetch, clear } = useUserSession()
</script>

<template>
  <main class="main">
    <div>
    <div v-if="loggedIn">
      <h1>Welcome {{ user?.firstname }}!</h1>
    </div>
    <div v-else>
      <h1>Not logged in</h1>
      <NuxtLink to="login">Login with password</NuxtLink>
    </div>
  </div>
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