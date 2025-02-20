// celebration/[id].delete
import type { ErrorResponseWithSuccess } from '~/types'
import { deleteCelebration } from '~/src'

export default defineEventHandler(async (event): Promise<ErrorResponseWithSuccess> => {
  try {
    // Extraire l'ID de l'URL
    const celebrationId = getRouterParam(event, 'id')

    if (!celebrationId) {
      return {
        statusCode: 400,
        body: { success: false, error: 'Celebration ID is required' },
      }
    };

    const isCelebrationDeleted = await deleteCelebration(celebrationId)
    if (!isCelebrationDeleted) {
      return {
        statusCode: 404,
        body: { success: false, error: 'Celebration not found or deletion failed.' },
      }
    }
    return {
      statusCode: 200,
      body: { success: true, message: 'Celebration deleted successfully.' },
    }
  }
  catch (error) {
    console.error('Error deleting celebration:', error)
    return {
      statusCode: 500,
      body: { success: false, error: 'Internal Server Error.' },
    }
  }
})
