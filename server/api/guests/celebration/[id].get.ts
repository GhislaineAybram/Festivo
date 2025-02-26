/**
 * @file server/api/guests/celebration/[id].get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve detailed guest information for a specific celebration, including :
 * - total guests count for the celebration,
 * - complete guests list with RSVP status,
 * - list of confirmed attending guests,
 * - total dietary restrictions & food allergy counts of confirmed attending guests.
 *
 * @route GET /api/guests/celebration/:id
 *
 * @param {string} id Celebration ID
 */

import type { CelebrationGuestsResponse, UserRestrictions } from '~/types'
import { getNumberGuestsByCelebration, getGuestsByCelebration, getComingGuestsByCelebration } from '~/src'

export default defineEventHandler(async (event): Promise<CelebrationGuestsResponse> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Celebration ID is required' })
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
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
