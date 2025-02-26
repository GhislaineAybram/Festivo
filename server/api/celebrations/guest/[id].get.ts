/**
 * @file server/api/celebrations/guest/[id].get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieves all celebrations & details where user is invited :
 * - ended celebrations list,
 * - upcoming celebrations list.
 *
 * @route GET /api/celebrations/guest/:id
 *
 * @param {string} id User ID
 */

import type { CelebrationsByGuestResponse } from '~/types'
import { getPastCelebrationsByGuest, getUpcomingCelebrationsByGuest } from '~/src'

export default defineEventHandler(async (event): Promise<CelebrationsByGuestResponse> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID is required' })
    }

    const celebrationsPast = await getPastCelebrationsByGuest(id)
    const celebrationsUpcoming = await getUpcomingCelebrationsByGuest(id)

    return {
      past: celebrationsPast ?? [],
      upcoming: celebrationsUpcoming ?? [],
    }
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
