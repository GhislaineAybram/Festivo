// celebration.post
import { newCelebration } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer le corps de la requête
    const body = await readBody(event)

    // Vérifie si les données essentielles sont présentes
    if (!body.name || !body.description || !body.address || !body.date || !body.hour || !body.author || !body.celebration_type) {
      return {
        statusCode: 400,
        body: { error: 'Missing required celebration data' },
      }
    }

    // Prépare les données pour la création de l'événement
    const celebrationData = {
      name: body.name,
      description: body.description,
      address: body.address,
      date: body.date,
      hour: body.hour,
      author: body.author,
      celebration_type: body.celebration_type,
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
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Server error while creating celebration' },
    }
  }
})
