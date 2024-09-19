<template>
  <div
    id="dateselection"
    class="card flex flex-wrap gap-4"
  >
    <div class="flex-auto">
      <label
        for="buttondisplay"
        class="font-bold block mb-2"
      > Date </label>
      <DatePicker
        v-model="buttondisplay"
        date-format="dd/mm/yy"
        variant="filled"
        show-icon
        fluid
        :show-on-focus="false"
        input-id="buttondisplay"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DatePicker from 'primevue/datepicker'

const buttondisplay = ref()
</script>

<style>
</style>
