/**
 * @file server/api/celebration/[id].delete.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to delete a celebration : removes celebration and all associated data.
 *
 * @route DELETE /api/celebration/:id
 *
 * @param {string} id Celebration ID
 * @body {CelebrationUpdateDTO} Updated celebration data
 *
 * @throws {Error} 400 - If the celebration ID is missing.
 * @throws {Error} 500 - If there is an internal server error or deletion fails.
 *
 * @returns {Promise<ResponseWithSuccess>} Returns an object indicating the success of the deletion.
 */

import type { ResponseWithSuccess } from '~/types'
import { deleteCelebration } from '~/src'

export default defineEventHandler(async (event): Promise<ResponseWithSuccess> => {
  try {
    // Extraire l'ID de l'URL
    const celebrationId = getRouterParam(event, 'id')

    if (!celebrationId) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Celebration ID is required' })
    };

    const isCelebrationDeleted = await deleteCelebration(celebrationId)

    if (!isCelebrationDeleted) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Celebration not found or deletion failed.' })
    }

    setResponseStatus(event, 200)
    return {
      body: { success: true, message: 'Celebration deleted successfully.' },
    }
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
