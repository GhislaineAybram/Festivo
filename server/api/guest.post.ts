/**
 * @file server/api/guest.post.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to create a new guest entry.
 *
 * @route POST /api/guest
 * @body {GuestCreateDTO} New guest data
 */

import { isExistingGuest, newGuest } from '~/src'
import type { Guest, NewGuestData } from '~/types'

export default defineEventHandler(async (event): Promise<{ body: Guest | string }> => {
  try {
    const body = await readBody(event)
    const { userId, celebrationId } = body

    if (!body.userId || !body.celebrationId) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Missing required guest data' })
    }

    const checkExistingGuest = await isExistingGuest(userId, celebrationId)

    if (checkExistingGuest) {
      setResponseStatus(event, 200)
      return {
        body: { message: 'User already added to the guests list.' },
      }
    }

    const guestData: NewGuestData = {
      userId,
      celebrationId,
    }

    const guest = await newGuest(guestData)

    if (!guest) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Failed to create the guest' })
    }
    setResponseStatus(event, 201)
    return {
      body: guest,
    }
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
