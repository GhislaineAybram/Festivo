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

export default defineEventHandler(async (event): Promise<{ statusCode: number, body: Celebration | { error: string } }> => {
  try {
    // Récupérer le corps de la requête
    const body = await readBody(event)

    // Vérifie si les données essentielles sont présentes
    if (!body.name || !body.description || !body.address || !body.date || !body.hour || !body.author || !body.celebrationType) {
      return {
        statusCode: 400,
        body: { error: 'Missing required celebration data' },
      }
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
      return {
        statusCode: 404,
        body: { error: 'Failed to create celebration' },
      }
    }

    return {
      statusCode: 201,
      body: celebration,
    }
  }
  catch (error) {
    console.error('Error creating celebration:', error)
    return {
      statusCode: 500,
      body: { error: 'Server error while creating celebration' },
    }
  }
})
