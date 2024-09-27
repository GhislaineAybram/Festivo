<script setup lang="ts">
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const userLogout = async () => {
  await auth.signOut();
};

watchEffect(() => {
  // if (!user.value) {
  //   return navigateTo('/login');
  // }
});

definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <main class="main">
    <div v-if="user">
      <h1>Welcome {{ userFirstname }}!</h1>
      <AlertRegistration />
    </div>
    <div v-else>
      <h1>Not logged in</h1>
      <NuxtLink to="login">
        <Button
          label="Login with password"
          class="mt-2 button-validation"
        />
      </NuxtLink>
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
