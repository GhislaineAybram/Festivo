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
 */

import { deleteUser } from '@/src'
import type { ErrorResponseWithSuccess } from '@/types'

export default defineEventHandler(async (event): Promise<ErrorResponseWithSuccess> => {
  try {
    // Extraire l'ID de l'URL
    const id = getRouterParam(event, 'id')
    if (!id) {
      return {
        statusCode: 400,
        body: { success: false, error: 'User ID is required' },
      }
    };
    const userId = id
    const isUserDeleted = await deleteUser(userId)
    if (!isUserDeleted) {
      return {
        statusCode: 404,
        body: { success: false, error: 'User not found or deletion failed.' },
      }
    }
    return {
      statusCode: 200,
      body: { success: true, message: 'User deleted successfully.' },
    }
  }
  catch (error) {
    console.error('Error deleting user:', error)
    return {
      statusCode: 500,
      body: { success: false, error: 'Internal Server Error.' },
    }
  }
})
