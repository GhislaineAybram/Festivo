/**
 * @file server/api/celebrations/author/[id].get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieves all celebrations & details created by the user :
 * - ended celebrations list,
 * - upcoming celebrations list.
 *
 * @route GET /api/celebrations/author/:id
 *
 * @param {string} id User ID
 *
 * @throws {Error} 400 - If the user ID is missing.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<CelebrationsByAuthorResponse>} Returns user's celebrations.
 */

import type { CelebrationsByAuthorResponse } from '~/types'
import { getPastCelebrationsByAuthor, getUpcomingCelebrationsByAuthor } from '~/src'

export default defineEventHandler(async (event): Promise<CelebrationsByAuthorResponse> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID is required' })
    }

    const celebrationsPast = await getPastCelebrationsByAuthor(id)
    const celebrationsUpcoming = await getUpcomingCelebrationsByAuthor(id)

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
