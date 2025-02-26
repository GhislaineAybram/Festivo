/**
 * @file server/api/guest/[user]/[celebration].put.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to update guest status for specific user and celebration combination.
 *
 * @route PUT /api/guest/:user/:celebration
 *
 * @param {string} user User ID
 * @param {string} celebration Celebration ID
 * @body {GuestUpdateDTO} Updated guest data
 */

import type { Guest } from '~/types'
import { updateIsComingGuest } from '~/src'

export default defineEventHandler(async (event): Promise<Guest | null> => {
  try {
    const { userId, celebrationId, isComing } = await readBody(event)

    if (!userId || !celebrationId || isComing === undefined) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID, celebration ID and isComing is required' })
    };

    const updatedIsComingGuest = await updateIsComingGuest(userId, celebrationId, isComing)

    if (!updatedIsComingGuest) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Failed to update coming status guest.' })
    }

    setResponseStatus(event, 200)
    return updatedIsComingGuest
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
