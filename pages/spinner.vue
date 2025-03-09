<template>
  <div>
    <h1>Test du composant Spinner</h1>
    <button @click="toggleSpinner">
      Afficher/Masquer le Spinner
    </button>
    <LoadingSpinner v-if="showSpinner" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSpinner = ref(false)

function toggleSpinner() {
  showSpinner.value = !showSpinner.value
}
</script>
