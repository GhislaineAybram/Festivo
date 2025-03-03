/**
 * @file middleware/invitation.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This middleware is used to ensure user is logged in before accessing protected routes,
 * particularly for event invitation pages.
 * It checks the current user's session using Supabase's authentication system
 * and redirects to the login page if the user is not authenticated.
 * Before redirecting, it stores the original destination URL in localStorage
 * to enable automatic redirection back to the intended event invitation page
 * after successful login.
 */

export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser()

  if (!user.value) {
    // stocke l'URL de redirection dans le localStorage
    localStorage.setItem('redirectAfterLogin', to.fullPath)

    return navigateTo('/login')
  }
})
