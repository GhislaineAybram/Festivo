// user.delete
import { deleteUser } from '~/supabase'
import type { ErrorResponseWithSuccess } from '~/types'

export default defineEventHandler(async (event): Promise<ErrorResponseWithSuccess> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')
    if (!id) {
      return {
        statusCode: 400,
        body: { success: false, error: 'User ID is required' },
      }
    };
    const userId = id
    const isUserDeleted = await deleteUser(userId)
    if (!isUserDeleted) {
      return {
        statusCode: 404,
        body: { success: false, error: 'User not found or deletion failed.' },
      }
    }
    return {
      statusCode: 200,
      body: { success: true, message: 'User deleted successfully.' },
    }
  }
  catch (error) {
    console.error('Error deleting user:', error)
    return {
      statusCode: 500,
      body: { success: false, error: 'Internal Server Error.' },
    }
  }
})
