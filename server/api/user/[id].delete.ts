/**
 * @file server/api/user/[id].delete.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to delete the user account : removes user account and all associated data.
 * GDPR compliance.
 *
 * @route DELETE /api/user/:id
 *
 * @param {string} id User ID
 *
 * @throws {Error} 400 - If the user ID is missing.
 * @throws {Error} 500 - If there is an internal server error or deletion fails.
 *
 * @returns {Promise<ResponseWithSuccess>} Returns an object indicating the success of the deletion.
 */

import { deleteUser } from '~/src'
import type { ResponseWithSuccess } from '~/types'

export default defineEventHandler(async (event): Promise<ResponseWithSuccess> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')

    if (!id) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID is required' })
    }

    const userId = id
    const isUserDeleted = await deleteUser(userId)

    if (!isUserDeleted) {
      setResponseStatus(event, 500)
      throw createError({ message: 'User not found or deletion failed.' })
    }

    setResponseStatus(event, 200)
    return {
      body: { success: true, message: 'User deleted successfully.' },
    }
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
