/**
 * @file server/api/celebration.post.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to create a new celebration with initial setup, validation and default template application.
 *
 * @route POST /api/celebration
 *
 * @body {CelebrationCreateDTO} New celebration data
 */

import type { Celebration, NewCelebrationData } from '~/types'
import { newCelebration } from '~/src'

export default defineEventHandler(async (event): Promise<{ body: Celebration }> => {
  try {
    // Récupérer le corps de la requête
    const body = await readBody(event)

    // Vérifie si les données essentielles sont présentes
    if (!body.name || !body.description || !body.address || !body.date || !body.hour || !body.author || !body.celebrationType) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Missing required celebration data' })
    }

    // Prépare les données pour la création de l'événement
    const celebrationData: NewCelebrationData = {
      name: body.name,
      description: body.description,
      address: body.address,
      date: body.date,
      hour: body.hour,
      author: body.author,
      celebrationType: body.celebrationType,
    }

    const celebration = await newCelebration(celebrationData)

    if (!celebration) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Failed to create celebration' })
    }
    setResponseStatus(event, 201)
    return {
      body: celebration,
    }
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
