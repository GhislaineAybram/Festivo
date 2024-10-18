export default defineNuxtRouteMiddleware((_to, _from) => {
  const _user = useSupabaseUser()

  // if (!user.value) {
  //   return navigateTo('/login')
  // }
})
