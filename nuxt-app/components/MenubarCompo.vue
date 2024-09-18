<script setup lang="ts">
import { useRouter } from 'vue-router';
import Menubar from 'primevue/menubar';
import type { MenuItem } from 'primevue/menuitem';

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const session = ref(null);
const loggedIn = ref(false);
const userId = ref(null);

const { data: userData, error, refresh } = await useFetch(() => `/api/user/${userId.value}`, {
  immediate: false, // Ne pas lancer la requête tant que l'ID n'est pas défini
});

watch(userId, (newId) => {
  if (newId) {
    refresh(); // Rafraîchir les données lorsque l'ID change
  }
});

const loading = computed(() => userData.value === null && !error.value);

const items = ref([
  {
    label: 'Accueil',
    icon: 'pi pi-home',
    command: () => router.push({ path: '/' }),
  },
  {
    label: 'Mes invitations',
    icon: 'pi pi-ticket',
    items: [
      {
        label: 'Pot de départ Rémi',
        icon: 'pi pi-chevron-right',
        command: () => router.push({ path: '/event/1' }),
      },
      {
        label: 'Anniversaire 3 ans Léopold',
        icon: 'pi pi-chevron-right',
        command: () => router.push({ path: '/event/2' }),
      },
    ],
  },
  {
    label: 'Mes événements',
    icon: 'pi pi-crown',
    items: [
      {
        label: 'Anniversaire 40 ans',
        icon: 'pi pi-chevron-right',
        command: () => router.push({ path: '/eventadmin/1' }),
      },
      {
        label: 'Baby shower',
        icon: 'pi pi-chevron-right',
        command: () => router.push({ path: '/eventadmin/2' }),
      },
    ],
  },
  {
    label: 'Connexion',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Mon profil',
        icon: 'pi pi-user',
        command: () => router.push({ path: `/profile/${userId.value}` }),
      },
      {
        label: 'Se connecter',
        icon: 'pi pi-sign-in',
        command: () => router.push({ path: '/login' }),
      },
      {
        label: 'Se déconnecter',
        icon: 'pi pi-sign-out',
        command: () => logout(),
      },
    ],
  },
]);

const logout = async () => {
  try {
    const response = await fetch(`${runtimeConfig.public.apiUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur lors de la déconnexion:', errorData.message);
      alert('Une erreur s\'est produite lors de la déconnexion : ' + errorData.message);
      return;
    };

    const data = await response.json();
    alert(data.message || 'Logout successful!');
    router.push('/login');
  } catch (error) {
    console.error('Logout error:', error);
    alert('Une erreur s\'est produite lors de la déconnexion.');
  }
};
</script>

<template>
  <div id="menuBar" class="card custom-menubar" unstyled>
    <Menubar :model="items" class="flex justify-between items-center">
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
          <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"/>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <img src="../public/img/festify-high-resolution-logo-square.png" alt="logo Festify" class="h-10">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style  lang="scss" scoped>
#menuBar {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
