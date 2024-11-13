// avatars
import { getAvatars } from '~~/supabase'

export default defineEventHandler(async () => {
  try {
    const avatars = await getAvatars()
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
