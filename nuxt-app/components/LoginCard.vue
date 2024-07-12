<template>
    <div id="login" class="card flex justify-center">
        <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
            <IconField>
                <InputIcon>
                    <i class="pi pi-user" />
                </InputIcon>
                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus fluid />
            </IconField>

            <IconField>
                <InputIcon>
                    <i class="pi pi-envelope" />
                </InputIcon>
                <InputText id="email" v-model="email" type="email" placeholder="Email" fluid />
            </IconField>

            <div class="flex items-center gap-2">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions.</label>
            </div>

            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const name = ref();
const email = ref();
const accept = ref(false);
</script>

<style>
#login {
    border-radius: 2rem;
    padding: 2rem;
    margin-top: 59px;
    border-width: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
</style>