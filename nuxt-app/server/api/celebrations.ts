// routes.ts
import { getCelebrations } from '~~/supabase'

export default defineEventHandler(async (event) => {
  try {
    const celebrations = await getCelebrations()
    return celebrations
  }
  catch (error) {
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch celebrations' },
    }
  }
})
