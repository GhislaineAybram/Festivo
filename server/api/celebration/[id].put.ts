/**
 * @file server/api/celebration/[id].put.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to update celebration details.
 *
 * @route PUT /api/celebration/:id
 *
 * @param {string} id Celebration ID
 * @body {CelebrationUpdateDTO} Updated celebration data
 */

import { updateCelebrationById } from '~/src'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const celebrationId = getRouterParam(event, 'id')

    if (!celebrationId) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Celebration ID is required' })
    }

    const updatedCelebrationData = await readBody(event)

    if (!updatedCelebrationData || Object.keys(updatedCelebrationData).length === 0) {
      setResponseStatus(event, 400)
      throw createError({ message: 'No updates provided' })
    }

    const updatedCelebration = await updateCelebrationById(celebrationId, updatedCelebrationData)

    if (!updatedCelebration) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Failed to update celebration informations' })
    }

    setResponseStatus(event, 200)
    return updatedCelebration
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
