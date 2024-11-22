import type { User } from '~/types'
import { updateAvatarByUser } from '~~/supabase'

export default defineEventHandler(async (event): Promise<User | null> => {
  try {
    const { id, newAvatar } = await readBody(event)

    if (!id || !newAvatar) {
      return {
        statusCode: 400,
        body: { error: 'User ID and newAvatar is required' },
      }
    };

    const updatedUser = await updateAvatarByUser(id, newAvatar)

    if (!updatedUser) {
      return {
        statusCode: 404,
        body: { error: 'Failed to update avatar user' },
      }
    };

    return updatedUser
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch avatar user' },
    }
  }
})
