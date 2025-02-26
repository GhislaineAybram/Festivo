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
