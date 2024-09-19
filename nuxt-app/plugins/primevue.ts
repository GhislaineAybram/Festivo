import PrimeVue from 'primevue/config'
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Menubar from 'primevue/menubar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Badge', Badge)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('Menubar', Menubar)
})
