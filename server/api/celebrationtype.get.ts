/**
 * @file server/api/celebrationtype.get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve all celebration types.
 *
 * @route GET /api/celebrationtype
 *
 * @throws {Error} 404 - If no celebration types is found.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<CelebrationType[]>} Returns list of celebration types.
 */

import { getCelebrationTypes } from '~/src'
import type { CelebrationType } from '~/types'

export default defineEventHandler(async (event): Promise <CelebrationType[]> => {
  try {
    const celebration_types = await getCelebrationTypes()

    if (!celebration_types) {
      setResponseStatus(event, 404)
      throw createError({ message: 'No celebration type found' })
    }

    setResponseStatus(event, 200)
    return celebration_types
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
