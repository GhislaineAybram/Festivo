<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const { t } = useI18n()
const toast = useToast()

const email = ref('')
const errorMsg = ref('')
const resetSuccess = ref(false)

const { auth } = useSupabaseClient()

const submitResetForm = async () => {
  try {
    const { error } = await auth.resetPasswordForEmail(email.value, {
      redirectTo: 'https://festivo-tawny.vercel.app/newpassword',
    })

    if (error) throw error

    // Clear form
    email.value = ''

    resetSuccess.value = true
    console.log('Password reset successfully')
    toast.add({
      severity: 'success',
      summary: t('reset_password.successfull'),
      detail: t('reset_password.success_message'),
      life: 3000,
    })
  }
  catch (error) {
    console.error('Reset password error:', error)
    errorMsg.value = (error as { message: string }).message
    setTimeout(() => {
      errorMsg.value = ''
    }, 3000)
  }
}
</script>

<template>
  <main class="main flex flex-col items-center">
    <div class="card flex justify-center" />
    <div
      id="register"
      class="card w-full sm:w-80 p-6 mb-6"
    >
      <form
        v-focustrap
        class="w-full sm:w-80 flex flex-col gap-4"
        @submit.prevent="submitResetForm"
      >
        <div
          id="form-inside"
          class="sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <img
            class="mx-auto h-14 w-auto"
            src="../public/img/boule-disco-indigo.png"
            alt="Logo Festivo"
          >
          <h3
            class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            {{ $t("reset_password.title") }}
          </h3>
        </div>

        <IconField>
          <InputIcon>
            <i class="pi pi-envelope" />
          </InputIcon>
          <InputText
            id="email"
            v-model="email"
            class="text"
            type="email"
            :placeholder="$t('user.email')"
            fluid
          />
        </IconField>

        <span
          v-if="errorMsg"
          class="text-sm text-red-500"
        >{{ errorMsg }}</span>
        <button
          id="reset-password-button"
          type="submit"
          label="reset-password-button"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {{ $t('reset_password.button') }}
        </button>
        <Toast />
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h3 {
  color: $indigo;
  background-color: white;
  font-size: xx-large;
}
.text {
  color: $indigo;
}
#register {
  border-radius: 1rem;
  border-color: $tangerine;
  padding: 1.5rem;
  margin-top: 59px;
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: white;
}
#register, a, a:hover, #register form, #accept-conditions, #accept-label, #form-inside, #form-inside img, span *, span {
  background-color: white;
}
#reset-password-button, #reset-password-button * {
  background-color: $indigo;
  color: $seashell;
  border-color: $indigo;
}
#reset-password-button:hover, #reset-password-button:hover * {
  background-color: $tangerine;
  color: $indigo;
  border-color: $indigo;
}
#accept-conditions {
  color: $indigo;
}
h1 {
  background-color: $tangerine;
  color: $indigo;
  width: 100%;
  height: 100px;
  align-content: center;
  text-align: center;
}
a {
  color: $indigo;
  text-decoration: underline;
  text-decoration-color: $indigo;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}
a:hover {
  color: $grey;
  text-decoration-color: $grey;
}
@media (min-width: 1024px) {
  #register {
    margin-top: 59px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 424px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 100%;
  }
}
@media (max-width: 600px) {
  #register {
    width: 80%; /* Définit la largeur à 80% de l'écran sur les smartphones */
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
