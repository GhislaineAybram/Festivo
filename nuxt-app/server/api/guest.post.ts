// guest.post
import { isExistingGuest, newGuest } from '~/supabase'
import type { Guest, NewGuestData } from '~/types'

export default defineEventHandler(async (event): Promise<{ statusCode: number, body: Guest | { error: string } }> => {
  try {
    const body = await readBody(event)

    if (!body.user_id || !body.celebration_id) {
      return {
        statusCode: 400,
        body: { error: 'Missing required guest data' },
      }
    }

    const { user_id, celebration_id } = body
    const checkExistingGuest = await isExistingGuest(user_id, celebration_id)

    if (checkExistingGuest) {
      return {
        statusCode: 200,
        body: checkExistingGuest,
      }
    }

    const guestData: NewGuestData = {
      user_id,
      celebration_id,
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
