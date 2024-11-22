// celebrations/guest/[id]
import type { CelebrationsByGuestResponse } from '~/types'
import { getPastCelebrationsByGuest, getUpcomingCelebrationsByGuest } from '~~/supabase'

export default defineEventHandler(async (event): Promise<CelebrationsByGuestResponse> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')
    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'Missing user ID' },
      }
    }
    const celebrationsPast = await getPastCelebrationsByGuest(id)
    const celebrationsUpcoming = await getUpcomingCelebrationsByGuest(id)
    return {
      past: celebrationsPast ?? [],
      upcoming: celebrationsUpcoming ?? [],
    }
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebrations by guest' },
    }
  }
})
