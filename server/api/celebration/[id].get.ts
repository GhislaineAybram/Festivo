/**
 * @file server/api/celebration/[id].get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve complete celebration details.
 *
 * @route GET /api/celebration/:id
 *
 * @param {string} id Celebration ID
 */

import type { CelebrationWithPictureAndAuthor } from '~/types'
import { getCelebrationById } from '~/src'

export default defineEventHandler(async (event): Promise<CelebrationWithPictureAndAuthor | { statusCode: number, body: { error: string } }> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Celebration ID is required' },
      }
    };

    const celebrationId = id

    const celebration = await getCelebrationById(celebrationId)

    if (!celebration) {
      return {
        statusCode: 404,
        body: { error: 'Celebration not found' },
      }
    };

    return celebration
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebration' },
    }
  }
})
