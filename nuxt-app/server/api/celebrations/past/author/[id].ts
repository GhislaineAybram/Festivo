// celebrations/past/author/[id]
import { getPastCelebrationsByAuthor } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')
    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Missing user ID' },
      }
    }
    const celebrations = await getPastCelebrationsByAuthor(id)
    return celebrations
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebrations' },
    }
  }
})
