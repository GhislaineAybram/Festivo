// avatars
import type { Avatar } from '~/types'
import { getAvatars } from '~~/supabase'

export default defineEventHandler(async (): Promise<Avatar[] | { statusCode: number, body: { error: string } }> => {
  try {
    const avatars = await getAvatars()

    if (!avatars) {
      return {
        statusCode: 404,
        body: { error: 'No avatar found' },
      }
    }
    return avatars
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch avatars' },
    }
  }
})
