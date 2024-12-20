<script setup lang="ts">
import Popover from 'primevue/popover'
import { ref } from 'vue'

const op = ref()

const runtimeConfig = useRuntimeConfig()

defineProps({
  celebrationId: {
    type: String,
    required: true,
  },
})

const members = ref([
  {
    name: 'Amy Elsner',
    image: 'amyelsner.png',
    email: 'amy@email.com',
    checked: false,
  },
  {
    name: 'Bernardo Dominic',
    image: 'bernardodominic.png',
    email: 'bernardo@email.com',
    checked: false,
  },
  {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png',
    email: 'ioni@email.com',
    checked: false,
  },
])

const toggle = (event: MouseEvent) => {
  op.value.toggle(event)
}
</script>

<template>
  <div class="card flex justify-center">
    <Button
      type="button"
      icon="pi pi-share-alt"
      label="Share"
      @click="toggle"
    />

    <Popover ref="op">
      <div class="flex flex-col gap-4 w-[25rem]">
        <div>
          <span class="font-medium block mb-2">Share this document</span>
          <InputGroup>
            <InputText
              :value="`${runtimeConfig.public.url}/celebration/${celebrationId}`"
              readonly
              class="w-[25rem]"
            />
            <InputGroupAddon>
              <i class="pi pi-copy" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-medium block mb-2">Invite Friends</span>
          <Button
            label="Invite"
            icon="pi pi-users"
          />
        </div>
        <div>
          <ul class="list-none p-0 m-0 flex flex-col gap-4">
            <li
              v-for="member in members"
              :key="member.name"
              class="flex items-center gap-2"
            >
              <img
                :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`"
                style="width: 32px"
              >
              <div>
                <span class="font-medium">{{ member.name }}</span>
                <div class="text-sm text-surface-500 dark:text-surface-400">
                  {{ member.email }}
                </div>
              </div>
              <div
                class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm"
              >
                <Checkbox
                  v-model="member.checked"
                  binary
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popover>
  </div>
</template>

<style scoped>
</style>
