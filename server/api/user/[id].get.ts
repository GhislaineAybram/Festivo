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
 */

import { getUserById } from '~/src'
import type { UserWithAvatar } from '~/types'

export default defineEventHandler(async (event): Promise<UserWithAvatar | { statusCode: number, body: { error: string } }> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      return {
        statusCode: 400,
        body: { error: 'User ID is required' },
      }
    };

    const userId = id

    const user = await getUserById(userId)

    if (!user) {
      return {
        statusCode: 404,
        body: { error: 'User not found' },
      }
    };

    return user
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch user' },
    }
  }
})
