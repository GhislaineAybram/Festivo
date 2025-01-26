// users (non utilisée)
import type { UserWithAvatar } from '~/types'
import { getUsers } from '~~/supabase'

export default defineEventHandler(async (): Promise <UserWithAvatar[] | { statusCode: number, body: { error: string } }> => {
  try {
    const users = await getUsers()

    if (!users) {
      return {
        statusCode: 404,
        body: { error: 'No users found' },
      }
    }
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
