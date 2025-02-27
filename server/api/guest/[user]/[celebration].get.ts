/**
 * @file server/api/guest/[user]/[celebration].get.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to retrieve guest status for specific user and celebration combination.
 *
 * @route GET /api/guest/:user/:celebration
 *
 * @param {string} user User ID
 * @param {string} celebration Celebration ID
 *
 * @throws {Error} 400 - If the user ID or celebration ID is missing.
 * @throws {Error} 404 - If the guest response is not found.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<boolean | null>} Returns guest answer :
 * `true` if the guest is attending,
 * `false` if not attending,
 * `null` if no response has been given.
 */

import { getIsComingGuest } from '~/src'

export default defineEventHandler(async (event): Promise<boolean | null> => {
  try {
    // Extraire l'ID de l'URL
    const userId = getRouterParam(event, 'user')
    const celebrationId = getRouterParam(event, 'celebration')

    if (!userId || !celebrationId) {
      setResponseStatus(event, 400)
      throw createError({ message: 'User ID and celebration ID are required' })
    }

    const isComing = await getIsComingGuest(userId, celebrationId)

    if (!isComing) {
      setResponseStatus(event, 404)
      throw createError({ message: 'Guest response not found' })
    }

    setResponseStatus(event, 200)
    return isComing
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
