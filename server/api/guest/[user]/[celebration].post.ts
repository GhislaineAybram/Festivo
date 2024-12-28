// guest/[user]/[celebration].post.ts
import type { Guest } from '~/types'
import { updateIsComingGuest } from '~~/supabase'

export default defineEventHandler(async (event): Promise<Guest | null> => {
  try {
    const { userId, celebrationId, isComing } = await readBody(event)

    if (!userId || !celebrationId || isComing === undefined) {
      return {
        statusCode: 400,
        body: { error: 'User ID, celebration ID and isComing is required' },
      }
    };

    const updatedIsComingGuest = await updateIsComingGuest(userId, celebrationId, isComing)

    if (!updatedIsComingGuest) {
      return {
        statusCode: 404,
        body: { error: 'Failed to update isComing guest' },
      }
    };

    return updatedIsComingGuest
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch isComing Guest' },
    }
  }
})
