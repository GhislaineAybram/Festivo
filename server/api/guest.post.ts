// guest.post
import { isExistingGuest, newGuest } from '~/src'
import type { Guest, NewGuestData } from '~/types'

export default defineEventHandler(async (event): Promise<{ statusCode: number, body: Guest | { error: string } }> => {
  try {
    const body = await readBody(event)

    if (!body.userId || !body.celebrationId) {
      return {
        statusCode: 400,
        body: { error: 'Missing required guest data' },
      }
    }

    const { userId, celebrationId } = body
    const checkExistingGuest = await isExistingGuest(userId, celebrationId)

    if (checkExistingGuest) {
      return {
        statusCode: 200,
        body: checkExistingGuest,
      }
    }

    const guestData: NewGuestData = {
      userId,
      celebrationId,
    }

    const guest = await newGuest(guestData)

    if (!guest) {
      return {
        statusCode: 404,
        body: { error: 'Failed to create the guest' },
      }
    }

    return {
      statusCode: 201,
      body: guest,
    }
  }
  catch (error) {
    console.error('Error creating guest:', error)
    return {
      statusCode: 500,
      body: { error: 'Server error while creating guest' },
    }
  }
})
