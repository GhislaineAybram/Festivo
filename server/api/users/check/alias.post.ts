/**
 * @file server/api/users/check/alias.post.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to check if an alias already exists in the database.
 *
 * @route POST /api/users/check/alias
 */

import { checkAliasExists } from '~/src'

export default defineEventHandler(async (event): Promise<boolean> => {
  try {
    const body = await readBody(event)
    const alias = body.alias

    if (!alias || typeof alias !== 'string') {
      setResponseStatus(event, 400)
      throw createError({ message: 'Alias is required' })
    }

    const isAliasExists = await checkAliasExists(alias)

    setResponseStatus(event, 200)
    return isAliasExists
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
