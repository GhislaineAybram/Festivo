// guest.post
import { newGuest } from '~/supabase'
import type { Guest, NewGuestData } from '~/types'

export default defineEventHandler(async (event): Promise<{ statusCode: number, body: Guest | { error: string } }> => {
  try {
    // Récupérer le corps de la requête
    const body = await readBody(event)

    // Vérifie si les données essentielles sont présentes
    if (!body.user_id || !body.celebration_id) {
      return {
        statusCode: 400,
        body: { error: 'Missing required guest data' },
      }
    }

    // Prépare les données pour la création de l'événement
    const guestData: NewGuestData = {
      user_id: body.user_id,
      celebration_id: body.celebration_id,
    }

    const guest = await newGuest(guestData)

    if (!guest) {
      return {
        statusCode: 404,
        body: { error: 'Failed to create the guest' },
      }
    }

    return {
      statusCode: 201,
      body: guest,
    }
  }
  catch (error) {
    console.error('Error creating guest:', error)
    return {
      statusCode: 500,
      body: { error: 'Server error while creating guest' },
    }
  }
})
