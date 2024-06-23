<template>
    <div class="card">
      <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu, root }">
          <a v-ripple class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge
              v-if="item.badge"
              :class="{ 'ml-auto': !root, 'ml-2': root }"
              :value="item.badge"
            />
            <span
              v-if="item.shortcut"
              class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
              >{{ item.shortcut }}</span
            >
            <i
              v-if="hasSubmenu"
              :class="[
                'pi pi-angle-down',
                { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
              ]"
            ></i>
          </a>
        </template>
        <template #end>
          <div class="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              shape="circle"
            />
          </div>
        </template>
      </Menubar>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Menubar from 'primevue/menubar'
  import router from '@/router';
  
  const items = ref([
    {
      label: 'Accueil',
      icon: 'pi pi-home',
      command: () => router.push('/'),
    },
    {
      label: 'Mes invitations',
      icon: 'pi pi-ticket',
      items: [
        {
          label: 'Pot de départ Rémi',
          icon: 'pi pi-chevron-right',
          command: () => router.push('/eventpage'),
        },
        {
          label: 'Anniversaire 3 ans Léopold',
          icon: 'pi pi-chevron-right',
          command: () => router.push('/eventpage'),
        }
      ]
    },
    {
      label: 'Mes événements',
      icon: 'pi pi-crown',
      items: [
        {
          label: 'Anniversaire 40 ans',
          icon: 'pi pi-chevron-right',
          command: () => router.push('/eventadmin'),
        },
        {
          label: 'Baby shower',
          icon: 'pi pi-chevron-right',
          command: () => router.push('/eventadmin'),
        }
      ]
    },
    {
      label: 'Connexion',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Se connecter',
          icon: 'pi pi pi-sign-in',
          command: () => router.push('/login'),
        },
        {
          label: 'Se déconnecter',
          icon: 'pi pi pi-sign-out',
          path: 'login',
        }
      ]
    }
  ])
  </script>
  