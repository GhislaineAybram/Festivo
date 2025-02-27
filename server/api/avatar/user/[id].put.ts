/**
 * @file server/api/avatar/user/[id].put.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to update a user's avatar.
 *
 * @route PUT /api/avatar/user/:id
 * @param {string} id User ID
 * @body {AvatarUpdateDTO} Avatar update data
 *
 * @throws {Error} 400 - If the user ID or avatar ID are missing or invalid.
 * @throws {Error} 500 - If there is an internal server error or update fails.
 *
 * @returns {Promise<User | null>} Returns the updated user
 */

import type { User } from '~/types'
import { updateAvatarByUser } from '~/src'

export default defineEventHandler(async (event): Promise<User | null> => {
  try {
    const { id, newAvatar } = await readBody(event)

    if (!id || !newAvatar) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID and newAvatar is required' })
    }

    const updatedUser = await updateAvatarByUser(id, newAvatar)

    if (!updatedUser) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Failed to update avatar user' })
    }

    setResponseStatus(event, 200)
    return updatedUser
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
