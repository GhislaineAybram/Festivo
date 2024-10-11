// routes.ts
import { getUsers } from '~~/supabase'

export default defineEventHandler(async () => {
  try {
    const users = await getUsers()
    return users
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch users' },
    }
  }
})
