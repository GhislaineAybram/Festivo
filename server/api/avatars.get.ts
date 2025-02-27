/**
 * @file server/api/avatars.get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve all available user avatars : available for user selection.
 *
 * @route GET /api/avatars
 *
 * @throws {Error} 404 - If no avatar is found.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<Avatar[]>} Returns list of avatars.
 */

import { getAvatars } from '~/src'
import type { Avatar } from '~/types'

export default defineEventHandler(async (event): Promise<Avatar[]> => {
  try {
    const avatars = await getAvatars()

    if (!avatars) {
      setResponseStatus(event, 404)
      throw createError({ message: 'No avatar found' })
    }

    setResponseStatus(event, 200)
    return avatars
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
