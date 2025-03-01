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
 *
 * @throws {Error} 400 - If the celebration ID is missing.
 * @throws {Error} 404 - If the celebration is not found.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<CelebrationWithPictureAndAuthor>} Returns celebration details.
 */

import type { CelebrationWithPictureAndAuthor } from '~/types'
import { getCelebrationById } from '~/src'

export default defineEventHandler(async (event): Promise<CelebrationWithPictureAndAuthor> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Celebration ID is required' })
    };

    const celebrationId = id

    const celebration = await getCelebrationById(celebrationId)

    if (!celebration) {
      setResponseStatus(event, 404)
      throw createError({ message: 'Celebration not found' })
    }

    setResponseStatus(event, 200)
    return celebration
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
