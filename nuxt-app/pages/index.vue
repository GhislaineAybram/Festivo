<script setup lang="ts">
const { auth } = useSupabaseClient();
const { data: { user },} = await auth.getUser();
let metadata = user?.user_metadata;

const firstname = computed(() => metadata?.firstname || '');

watchEffect(() => {
  if (!user) {
    return navigateTo('/login');
  }
});

definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <main class="main">
    <div v-if="user">
      <h1>Welcome {{ firstname }}!</h1>
      <div class="grid grid-cols-2 sm:grid-cols-1">
        <CelebrationCard />
        <CelebrationCard />
      </div>
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
