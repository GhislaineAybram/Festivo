import { getNumberGuestsByCelebration } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Celebration ID is required' },
      }
    }

    const celebrationId = id

    const nbGuests = await getNumberGuestsByCelebration(celebrationId)

    if (!nbGuests) {
      return {
        statusCode: 404,
        body: { error: 'Celebration not found' },
      }
    }

    return nbGuests
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebration' },
    }
  }
})
