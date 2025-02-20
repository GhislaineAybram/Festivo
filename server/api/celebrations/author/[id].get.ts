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
 */

import type { CelebrationsByAuthorResponse } from '~/types'
import { getPastCelebrationsByAuthor, getUpcomingCelebrationsByAuthor } from '~/src'

export default defineEventHandler(async (event): Promise<CelebrationsByAuthorResponse> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')
    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Missing user ID' },
      }
    }
    const celebrationsPast = await getPastCelebrationsByAuthor(id)
    const celebrationsUpcoming = await getUpcomingCelebrationsByAuthor(id)
    return {
      past: celebrationsPast ?? [],
      upcoming: celebrationsUpcoming ?? [],
    }
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebrations by author' },
    }
  }
})
