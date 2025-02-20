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
      return {
        statusCode: 400,
        body: { error: 'Missing user ID' },
      }
    }
    const celebrationsPast = await getPastCelebrationsByGuest(id)
    const celebrationsUpcoming = await getUpcomingCelebrationsByGuest(id)
    return {
      past: celebrationsPast ?? [],
      upcoming: celebrationsUpcoming ?? [],
    }
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebrations by guest' },
    }
  }
})
