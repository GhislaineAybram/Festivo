/**
 * @file server/api/user/[id].get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve detailed user information.
 *
 * @route GET /api/user/:id
 *
 * @param {string} id User ID
 *
 * @throws {Error} 400 - If the user ID is missing.
 * @throws {Error} 404 - If the user is not found.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<UserWithAvatar>} Returns user with details.
 */

import { getUserById } from '~/src'
import type { UserWithAvatar } from '~/types'

export default defineEventHandler(async (event): Promise<UserWithAvatar> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID is required' })
    }

    const userId = id

    const user = await getUserById(userId)

    if (!user) {
      setResponseStatus(event, 404)
      throw createError({ message: 'User not found' })
    }

    setResponseStatus(event, 200)
    return user
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
