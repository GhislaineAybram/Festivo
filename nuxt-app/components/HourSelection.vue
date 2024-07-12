<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="datepicker-timeonly" class="font-bold block mb-2"> Time </label>
            <DatePicker id="datepicker-timeonly" v-model="time" timeOnly fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const time = ref();
</script>
