<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const session = ref(null);
const error = ref(null);
const pending = ref(true);
const router = useRouter();

const fetchSession = async () => {
  try {
    const { data, error: fetchError, pending: fetchPending } = await useFetch(`${runtimeConfig.public.apiUrl}/auth/session`);
    session.value = data.value;
    error.value = fetchError.value;
    pending.value = fetchPending.value;
  } catch (err) {
    console.error('Erreur lors de la récupération de la session', err);
  }
};

fetchSession();

const loggedIn = computed(() => !!session.value?.user);
const userFirstname = computed(() => session.value?.user?.firstname || '');
const userLastname = computed(() => session.value?.user?.lastname || '');
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