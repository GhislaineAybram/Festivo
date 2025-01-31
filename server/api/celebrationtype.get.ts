// celebration_types
import type { CelebrationType } from '~/types'
import { getCelebrationTypes } from '~~/supabase'

export default defineEventHandler(async (): Promise <CelebrationType[] | { statusCode: number, body: { error: string } }> => {
  try {
    const celebration_types = await getCelebrationTypes()

    if (!celebration_types) {
      return {
        statusCode: 404,
        body: { error: 'No celebration_type found' },
      }
    }
    return celebration_types
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebration_type' },
    }
  }
})
