// export default defineNuxtRouteMiddleware(async(to, from) => {
//     try {
//     const { auth } = useSupabaseClient()
//     const { data: { user } } = await auth.getUser()
//     const { id } = to.params

//     if (!user) {
//         // stocke l'URL de redirection dans le localStorage
//         localStorage.setItem('redirectAfterLogin', `/celebration/${id}`);
//         return navigateTo('/login');
//     }
//   } catch (err) {
//     console.error('An error occurred in the middleware:', err);
//   }
// })
