<script setup lang="ts">
import { useRouter } from 'vue-router';
// import Menubar from 'primevue/menubar';
const router = useRouter();

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
        label: 'Se connecter',
        icon: 'pi pi-sign-in',
        command: () => router.push({ path: '/login' }),
      },
      {
        label: 'Se déconnecter',
        icon: 'pi pi-sign-out',
        command: () => router.push({ path: '/login' }),
      },
    ],
  },
]);
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

<style scoped>
:root {
  --p-menubar-background: #180161; /* Couleur de fond de la barre de navigation */
  --p-menubar-item-color: #ffa96a; /* Couleur du texte des éléments du menu */
  --p-menubar-item-hover-background: #ffa96a; /* Couleur de fond au survol des éléments du menu */
  --p-menubar-item-hover-color: #180161; /* Couleur du texte au survol des éléments du menu */
  --p-menubar-item-border: #180161; /* Couleur des bordures des éléments du menu */
  --p-menubar-icon-color: #ffa96a;
}
#menuBar {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #180161;
  color: #ffa96a;
}
</style>
