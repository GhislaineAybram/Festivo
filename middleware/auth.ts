export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const { auth } = useSupabaseClient()
  const { data: { user } } = await auth.getUser()

  if (!user) {
    return navigateTo('/')
  }
})
