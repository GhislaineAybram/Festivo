// guests/celebration/[id]
import type { CelebrationGuestsResponse, UserRestrictions } from '~/types'
import { getGuestsByCelebration, getComingGuestsByCelebration, getNumberGuestsByCelebration } from '~~/supabase'

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
    const guests_list = (await getGuestsByCelebration(celebrationId)) || []
    const coming_guests_list = (await getComingGuestsByCelebration(celebrationId)) || []

    const restrictionsCounts: Record<UserRestrictions, number> = {
      is_l_o_vegetarian: 0,
      is_o_vegetarian: 0,
      is_l_vegetarian: 0,
      is_vegetalien: 0,
      is_vegan: 0,
      is_pescetarian: 0,
      is_frugivore: 0,
      is_rawfoodist: 0,
      has_gluten_allergy: 0,
      has_crustaceans_allergy: 0,
      has_eggs_allergy: 0,
      has_peanuts_allergy: 0,
      has_fish_allergy: 0,
      has_soy_allergy: 0,
      has_milk_allergy: 0,
      has_nuts_allergy: 0,
      has_celery_allergy: 0,
      has_mustard_allergy: 0,
      has_sesame_allergy: 0,
      has_sulfite_allergy: 0,
      has_lupin_allergy: 0,
      has_sellfish_allergy: 0,
    }
    coming_guests_list.forEach((guest) => {
      Object.keys(restrictionsCounts).forEach((restriction) => {
        if (guest.user_id[restriction]) {
          restrictionsCounts[restriction]++
        }
      })
    })

    return {
      nb_guests,
      guests_list,
      coming_guests_list,
      restrictionsCounts,
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
