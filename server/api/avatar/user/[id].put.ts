/**
 * @file server/api/avatar/user/[id].put.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve all available user avatars.
 *
 * @route PUT /api/avatar/user/:id
 * @param {string} id User ID
 * @body {AvatarUpdateDTO} Avatar update data
 */

import type { User } from '~/types'
import { updateAvatarByUser } from '~/src'

export default defineEventHandler(async (event): Promise<User | null> => {
  try {
    const { id, newAvatar } = await readBody(event)

    if (!id || !newAvatar) {
      return {
        statusCode: 400,
        body: { error: 'User ID and newAvatar is required' },
      }
    };

    const updatedUser = await updateAvatarByUser(id, newAvatar)

    if (!updatedUser) {
      return {
        statusCode: 404,
        body: { error: 'Failed to update avatar user' },
      }
    };

    return updatedUser
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch avatar user' },
    }
  }
})
