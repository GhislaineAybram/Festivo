/**
 * @file server/api/celebrationtype.get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve all celebration types.
 *
 * @route GET /api/celebrationtype
 */

import { getCelebrationTypes } from '~/src'
import type { CelebrationType } from '~/types'

export default defineEventHandler(async (event): Promise <CelebrationType[]> => {
  try {
    const celebration_types = await getCelebrationTypes()

    if (!celebration_types) {
      setResponseStatus(event, 400)
      throw createError({ message: 'No celebration_type found' })
    }

    setResponseStatus(event, 200)
    return celebration_types
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
