<script setup lang="ts">
import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import { useRuntimeConfig } from '#app'
import type { Celebration } from '~/types'

const { id } = useRoute().params

const runtimeConfig = useRuntimeConfig()
const { data: celebration, error } = await useFetch<Celebration>(
  () => `${runtimeConfig.public.apiUrl}/celebration/${id}`,
)

if (error.value) {
  console.error('Failed to fetch celebration data', error.value)
}
</script>

<template>
  <main class="main">
    <div class="bg-white">
      <!-- <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"> -->
      <div>
        <div id="photo-title-celebration">
          <h1 class="text-3xl font-bold sm:text-4xl">
            {{ celebration?.name }}
          </h1>
          <img
            src="~/public/img/photo-party.png"
            alt="photo de ballons"
            class="photo-celebration"
          >
          <p
            id="celebration-author-name"
            class="mt-4 text-gray-500"
          >
            {{ $t("celebration.created") }} {{ celebration?.author }}
          </p>
        </div>
        <h3 class="text-2xl mt-4 text-gray-900">
          {{ celebration?.description }}
        </h3>
        <div id="celebration-details">
          <dl
            class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.date") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ $t("celebration.the") }} {{ celebration?.date }}
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.hour") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ $t("celebration.at") }} {{ celebration?.hour }}
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.guests") }}
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                30
              </dd>
            </div>
          </dl>

          <dl
            class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                {{ $t("celebration.answer") }}
              </dt>
              <div id="celebration-answer">
                <Button
                  icon="pi pi-check"
                  severity="success"
                  rounded
                  aria-label="Filter"
                />
                <Button
                  icon="pi pi-bell"
                  severity="warn"
                  rounded
                  aria-label="Notification"
                />
                <Button
                  icon="pi pi-times"
                  severity="danger"
                  rounded
                  aria-label="Cancel"
                />
              </div>
            </div>
          </dl>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#photo-title-celebration {
  position: relative;
}
.photo-celebration {
  width: 100%;
  height: auto;
}
h1 {
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#celebration-author-name {
  color: $grey;
  text-align: right;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.photo-celebration {
  filter: opacity(35%);
  z-index: -1;
}
h3 {
  color: $indigo;
  background-color: $seashell;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: left;
  padding-left: 50px;
}
@media (min-width: 1024px) {
  #celebration-details {
    margin-top: 59px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 100%;
  }
}
@media (max-width: 600px) {
  #celebration-details {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
