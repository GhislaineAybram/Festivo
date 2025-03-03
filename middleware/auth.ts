/**
 * @file middleware/auth.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This middleware is used to ensure user is logged in before accessing protected routes.
 * It checks the current user's session using Supabase's authentication system
 * and redirects to the homepage if the user is not authenticated.
 */

export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const user = useSupabaseUser()

  if (!user.value) {
    return navigateTo('/login')
  }
})
