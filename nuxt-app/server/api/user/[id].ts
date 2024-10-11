import { getUserById } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'User ID is required' },
      }
    }

    const userId = id

    const user = await getUserById(userId)

    if (!user) {
      return {
        statusCode: 404,
        body: { error: 'User not found' },
      }
    }

    return user
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch user' },
    }
  }
})
