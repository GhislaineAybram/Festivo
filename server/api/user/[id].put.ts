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
      return {
        statusCode: 400,
        body: { error: 'User ID is required' },
      }
    };
    const body = await readBody(event) // Attends que le corps de la requête soit résolu

    const dbField = Object.keys(body)[0] // Récupère le nom du champ dynamique
    const value = body[dbField]

    if (dbField === undefined) {
      return {
        statusCode: 400,
        body: { error: 'Field, and value are required' },
      }
    }
    const updatedUser = await updateFoodInformationByUser(userId, dbField, value)

    if (!updatedUser) {
      return {
        statusCode: 404,
        body: { error: 'Failed to update user food information' },
      }
    }
    return updatedUser
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to update user information' },
    }
  }
})
