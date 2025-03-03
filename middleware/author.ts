/**
 * @file middleware/author.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This middleware ensures that only the event owner can access the event modification page.
 * It checks if the user is authenticated and if they are the event creator.
 */

import type { CelebrationWithPictureAndAuthor } from '~/types'

export default defineNuxtRouteMiddleware(async (to, _from) => {
  // Vérifier si l'utilisateur est connecté
  const user = useSupabaseUser()
  const runtimeConfig = useRuntimeConfig()

  if (!user.value) {
    return navigateTo('/login')
  }

  // Extraire l'ID de l'événement de l'URL
  const celebrationId = to.params.id

  // Récupérer les détails de l'événement
  const { data: celebration } = await useFetch<CelebrationWithPictureAndAuthor>(
    () => `${runtimeConfig.public.apiUrl}/celebration/${celebrationId}`,
  )

  // Vérifier si l'utilisateur actuel est le créateur de l'événement
  if (!celebration.value || celebration.value.author.id !== user.value.id) {
    // L'utilisateur n'est pas autorisé, redirection vers erreur 500
    return navigateTo('/500')
  }
})
