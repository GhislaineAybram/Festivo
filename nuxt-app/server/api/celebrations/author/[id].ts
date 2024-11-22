// celebrations/author/[id]
import type { CelebrationsByAuthorResponse } from '~/types'
import { getPastCelebrationsByAuthor, getUpcomingCelebrationsByAuthor } from '~~/supabase'

export default defineEventHandler(async (event): Promise<CelebrationsByAuthorResponse> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')
    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Missing user ID' },
      }
    }
    const celebrationsPast = await getPastCelebrationsByAuthor(id)
    const celebrationsUpcoming = await getUpcomingCelebrationsByAuthor(id)
    return {
      past: celebrationsPast ?? [],
      upcoming: celebrationsUpcoming ?? [],
    }
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebrations by author' },
    }
  }
})
