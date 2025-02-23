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
 */

import { getIsComingGuest } from '@/src'

export default defineEventHandler(
  async (
    event,
  ): Promise<
    boolean | null | { statusCode: number, body: { error: string } }
  > => {
    // Extraire l'ID de l'URL
    const userId = getRouterParam(event, 'user')
    const celebrationId = getRouterParam(event, 'celebration')

    if (!userId || !celebrationId) {
      return {
        statusCode: 400,
        body: { error: 'User ID and celebration ID are required' },
      }
    }

    try {
      const isComing = await getIsComingGuest(userId, celebrationId)

      return isComing
    }
    catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: { error: 'Failed to fetch isComing Guest' },
      }
    }
  },
)
