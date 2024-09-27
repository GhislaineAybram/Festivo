import { getCelebrationById } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const id = event.context.params?.id

    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Celebration ID is required' },
      }
    }

    // Convertir l'ID en nombre
    const celebrationId = parseInt(String(id), 10)

    if (isNaN(celebrationId)) {
      return {
        statusCode: 400,
        body: { error: 'Invalid Celebration ID' },
      }
    }

    const celebration = await getCelebrationById(celebrationId)

    if (!celebration) {
      return {
        statusCode: 404,
        body: { error: 'Celebration not found' },
      }
    }

    return celebration
  }
  catch (error) {
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebration' },
    }
  }
})
