<template>
    <div id="dateselection" class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> Date </label>
            <DatePicker v-model="buttondisplay" dateFormat="dd/mm/yy" variant="filled" showIcon fluid :showOnFocus="false" inputId="buttondisplay" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import DatePicker from 'primevue/datepicker';
const buttondisplay = ref();
</script>

<style>
</style>
