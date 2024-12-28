// guests/celebration/[id]
import type { CelebrationGuestsResponse } from '~/types'
import { getGuestsByCelebration, getNumberGuestsByCelebration } from '~~/supabase'

export default defineEventHandler(async (event): Promise<CelebrationGuestsResponse> => {
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

    const nb_guests = (await getNumberGuestsByCelebration(celebrationId)) || 0

    // if (!nb_guests) {
    //   nb_guests = 0
    // }

    const guests_list = (await getGuestsByCelebration(celebrationId)) || []

    return {
      nb_guests,
      guests_list,
    }
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebration guests' },
    }
  }
})
