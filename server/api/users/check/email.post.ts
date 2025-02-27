/**
 * @file server/api/users/check/email.post.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Endpoint to check if an email address already exists in the database.
 *
 * @route POST /api/users/check/email
 *
 * @param {string} email - The email to check for existence in the database.
 *
 * @throws {Error} 400 - If the email is not provided or is not a string.
 * @throws {Error} 500 - If there is an internal server error or the data retrieval fails.
 *
 * @returns {Promise<boolean>} - Returns `true` if the email exists, `false` if it does not.
 */

import { checkEmailExists } from '~/src'

export default defineEventHandler(async (event): Promise<boolean> => {
  try {
    const body = await readBody(event)
    const email = body?.email

    if (!email || typeof email !== 'string') {
      setResponseStatus(event, 400)
      throw createError({ message: 'Missing or invalide email address' })
    }

    const isEmailExists = await checkEmailExists(email)

    setResponseStatus(event, 200)
    return isEmailExists
  }
  catch (error) {
    setResponseStatus(event, 500)
    throw createError({ message: 'Internal Server Error: ', data: error })
  }
})
