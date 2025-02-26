/**
 * @file server/api/user/[id].put.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to update detailed user information.
 *
 * @route PUT /api/user/:id
 *
 * @param {string} id User ID
 * @body {UserUpdateDTO} Updated user data
 */

import { updateFoodInformationByUser } from '~/src'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const userId = getRouterParam(event, 'id')

    if (!userId) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID is required' })
    }

    const body = await readBody(event)

    const dbField = Object.keys(body)[0]
    const value = body[dbField]

    if (dbField === undefined) {
      setResponseStatus(event, 400)
      throw createError({ message: 'Field, and value are required' })
    }

    const updatedUser = await updateFoodInformationByUser(userId, dbField, value)

    if (!updatedUser) {
      setResponseStatus(event, 500)
      throw createError({ message: 'Failed to update user food information' })
    }

    setResponseStatus(event, 200)
    return updatedUser
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
