// guests/celebration/[id]
import type { CelebrationGuestsResponse, UserRestrictions } from '~/types'
import { getNumberGuestsByCelebration, getGuestsByCelebration, getComingGuestsByCelebration } from '~/src'

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
      isLOVegetarian: 0,
      isOVegetarian: 0,
      isLVegetarian: 0,
      isVegetalien: 0,
      isVegan: 0,
      isPescetarian: 0,
      isFrugivore: 0,
      isRawfoodist: 0,
      hasGlutenAllergy: 0,
      hasCrustaceansAllergy: 0,
      hasEggsAllergy: 0,
      hasPeanutsAllergy: 0,
      hasFishAllergy: 0,
      hasSoyAllergy: 0,
      hasMilkAllergy: 0,
      hasNutsAllergy: 0,
      hasCeleryAllergy: 0,
      hasMustardAllergy: 0,
      hasSesameAllergy: 0,
      hasSulfiteAllergy: 0,
      hasLupinAllergy: 0,
      hasSellfishAllergy: 0,
    }
    coming_guests_list.forEach((guest) => {
      Object.keys(restrictionsCounts).forEach((restriction) => {
        if (guest.userId[restriction]) {
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
