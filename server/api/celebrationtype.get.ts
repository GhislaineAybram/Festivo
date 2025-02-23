/**
 * @file server/api/celebrationtype.get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve all celebration types.
 *
 * @route PUT /api/celebrationtype
 */

import { defineEventHandler } from 'h3'
import { getCelebrationTypes } from '@/src'
import type { CelebrationType } from '@/types'

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
