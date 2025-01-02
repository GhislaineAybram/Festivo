// celebration/[id].put
import { updateCelebrationById } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const celebrationId = getRouterParam(event, 'id')

    if (!celebrationId) {
      return {
        statusCode: 400,
        body: { error: 'Celebration ID is required' },
      }
    };

    const updatedCelebrationData = await readBody(event)

    if (!updatedCelebrationData || Object.keys(updatedCelebrationData).length === 0) {
      return {
        statusCode: 400,
        message: 'No updates provided',
      }
    }

    const updatedCelebration = await updateCelebrationById(celebrationId, updatedCelebrationData)

    if (!updatedCelebration) {
      return {
        statusCode: 404,
        body: { error: 'Failed to update celebration informations' },
      }
    };

    return updatedCelebration
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebration' },
    }
  }
})
