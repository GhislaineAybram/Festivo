/**
 * @file src/index.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * File used to make request to supabase database within Drizzle ORM.
 */

import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import { and, asc, desc, eq, gte, lt, sql } from 'drizzle-orm'
import postgres from 'postgres'
import * as schema from './db/schema'

import { avatar, celebration, celebrationType, guest, user } from './db/schema'
import type { Avatar, Celebration, CelebrationType, CelebrationWithPictureAndAuthor, Guest, GuestWithUserInfo, NewCelebrationData, NewGuestData, UpdateCelebrationData, User, UserWithAvatar } from '~/types'

const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle(client, { schema })

/**
 * Retrieves a user by their ID, including their avatar information
 * @param id - User ID
 * @returns A user object with avatar details, or null if not found
 */
export const getUserById = async (id: string): Promise<UserWithAvatar | null> => {
  const results = await db
    .select({
      user: user,
      avatar: {
        avatarId: avatar.avatarId,
        picture: avatar.picture,
        pictureDescription: avatar.pictureDescription,
      },
    })
    .from(user)
    .leftJoin(avatar, eq(user.avatar, avatar.avatarId))
    .where(eq(user.userId, id))
    .limit(1)

  if (!results[0]) return null

  const result = results[0]
  return {
    ...result.user,
    avatar: result.avatar
      ? {
          avatarId: result.avatar.avatarId,
          picture: result.avatar.picture,
          pictureDescription: result.avatar.pictureDescription,
        }
      : null,
  }
}

/**
 * Checks if an email already exists in the database
 * @param email - The email to check
 * @returns True if the email exists, false otherwise
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(user)
    .where(eq(user.email, email))

  return result[0].count > 0
}

/**
 * Checks if an alias already exists in the database
 * @param alias - The alias to check
 * @returns True if the alias exists, false otherwise
 */
export const checkAliasExists = async (alias: string): Promise<boolean> => {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(user)
    .where(eq(user.alias, alias))

  return result[0].count > 0
}

/**
 * Updates a user's avatar by their ID
 * @param id - User ID
 * @param newAvatar - The new avatar ID
 * @returns The updated user object, or null if not found
 */
export const updateAvatarByUser = async (id: string, newAvatar: string): Promise<User | null> => {
  const result = await db
    .update(user)
    .set({ avatar: newAvatar })
    .where(eq(user.userId, id))
    .returning()

  return result[0] || null
}

/**
 * Updates a user's food restriction preference
 * @param id - User ID
 * @param restriction - The food restriction field to update
 * @param value - The new value for the restriction
 * @returns The updated user object, or null if not found
 */
export const updateFoodInformationByUser = async (id: string, restriction: string, value: boolean): Promise<User | null> => {
  const result = await db
    .update(user)
    .set({ [restriction]: value })
    .where(eq(user.userId, id))
    .returning()

  return result[0] || null
}

/**
 * Updates the attendance status of a guest for a specific celebration
 * @param userId - Guest's user ID
 * @param celebrationId - Celebration ID
 * @param isComing - The attendance status
 * @returns The updated guest object, or null if not found.
 */
export const updateIsComingGuest = async (userId: string, celebrationId: string, isComing: boolean): Promise<Guest | null> => {
  const result = await db
    .update(guest)
    .set({ isComing })
    .where(
      and(
        eq(guest.userId, userId),
        eq(guest.celebrationId, celebrationId),
      ),
    )
    .returning()

  return result[0] || null
}

/**
 * Updates a celebration's details by its ID
 * @param id - Celebration ID
 * @param newCelebrationData - The updated celebration data
 * @returns The updated celebration object, or null if not found
 */
export const updateCelebrationById = async (id: string, newCelebrationData: UpdateCelebrationData): Promise<CelebrationWithPictureAndAuthor | null> => {
  const result = await db
    .update(celebration)
    .set(newCelebrationData)
    .where(eq(celebration.celebrationId, id))
    .returning()

  return result[0] || null
}

/**
 * Retrieves the attendance status of a guest for a specific celebration
 * @param userId - Guest's user ID
 * @param celebrationId - Celebration ID
 * @returns True if the guest is attending, false if not, or null if not found
 */
export const getIsComingGuest = async (userId: string, celebrationId: string): Promise<boolean | null> => {
  const result = await db.query.guest.findFirst({
    where: and(
      eq(guest.userId, userId),
      eq(guest.celebrationId, celebrationId),
    ),
    columns: {
      isComing: true,
    },
  })

  return result?.isComing ?? null
}

/**
 * Fetches all available celebration types
 * @returns An array of celebration types, or null if none are found
 */
export async function getCelebrationTypes(): Promise<CelebrationType[] | null> {
  return db.select().from(celebrationType)
}

/**
 * Retrieves a celebration by its ID, including its type and author information
 * @param id - Celebration ID
 * @returns A celebration object with additional details, or null if not found
 */
export const getCelebrationById = async (id: string): Promise<CelebrationWithPictureAndAuthor | null> => {
  const results = await db
    .select({
      celebration: celebration,
      celebrationType: {
        celebrationTypeId: celebrationType.celebrationTypeId,
        picture: celebrationType.picture,
        category: celebrationType.category,
      },
      author: {
        id: user.userId,
        alias: user.alias,
      },
    })
    .from(celebration)
    .leftJoin(celebrationType, eq(celebration.celebrationType, celebrationType.celebrationTypeId))
    .leftJoin(user, eq(celebration.author, user.userId))
    .where(eq(celebration.celebrationId, id))
    .limit(1)

  if (!results[0]) return null

  return {
    ...results[0].celebration,
    celebrationType: results[0].celebrationType,
    author: results[0].author,
  } as CelebrationWithPictureAndAuthor
}

/**
 * Fetches upcoming celebrations created by a specific author
 * @param id - Author's user ID
 * @returns An array of upcoming celebrations, or null if none are found
 */
export const getUpcomingCelebrationsByAuthor = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
  const results = await db
    .select({
      celebration: celebration,
      celebrationType: {
        picture: celebrationType.picture,
      },
      author: {
        id: user.userId,
        alias: user.alias,
      },
    })
    .from(celebration)
    .leftJoin(celebrationType, eq(celebration.celebrationType, celebrationType.celebrationTypeId))
    .leftJoin(user, eq(celebration.author, user.userId))
    .where(
      and(
        eq(celebration.author, id),
        gte(celebration.date, new Date().toISOString()),
      ),
    )
    .orderBy(asc(celebration.date))

  if (!results.length) return null

  return results.map(result => ({
    ...result.celebration,
    celebrationType: result.celebrationType,
    author: result.author,
  })) as CelebrationWithPictureAndAuthor[]
}

/**
 * Fetches past celebrations created by a specific author
 * @param id - Author's user ID
 * @returns An array of past celebrations, or null if none are found
 */
export const getPastCelebrationsByAuthor = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
  const results = await db
    .select({
      celebration: celebration,
      celebrationType: {
        picture: celebrationType.picture,
      },
      author: {
        id: user.userId,
        alias: user.alias,
      },
    })
    .from(celebration)
    .leftJoin(celebrationType, eq(celebration.celebrationType, celebrationType.celebrationTypeId))
    .leftJoin(user, eq(celebration.author, user.userId))
    .where(
      and(
        eq(celebration.author, id),
        lt(celebration.date, new Date().toISOString()),
      ),
    )
    .orderBy(desc(celebration.date))

  if (!results.length) return null

  return results.map(result => ({
    ...result.celebration,
    celebrationType: result.celebrationType,
    author: result.author,
  })) as CelebrationWithPictureAndAuthor[]
}

/**
 * Retrieves upcoming celebrations where a user is a guest
 * @param id - Guest's user ID
 * @returns An array of upcoming celebrations, or null if none are found
 */
export const getUpcomingCelebrationsByGuest = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
  const results = await db
    .select({
      celebration: celebration,
      celebrationType: {
        picture: celebrationType.picture,
      },
      author: {
        id: user.userId,
        alias: user.alias,
      },
    })
    .from(celebration)
    .leftJoin(celebrationType, eq(celebration.celebrationType, celebrationType.celebrationTypeId))
    .leftJoin(user, eq(celebration.author, user.userId))
    .innerJoin(guest, eq(celebration.celebrationId, guest.celebrationId))
    .where(
      and(
        eq(guest.userId, id),
        gte(celebration.date, new Date().toISOString()),
      ),
    )
    .orderBy(asc(celebration.date))

  if (!results.length) return null

  return results.map(result => ({
    ...result.celebration,
    celebrationType: result.celebrationType,
    author: result.author,
  })) as CelebrationWithPictureAndAuthor[]
}

/**
 * Retrieves past celebrations where a user was a guest
 * @param id - Guest's user ID
 * @returns An array of past celebrations, or null if none are found
 */
export const getPastCelebrationsByGuest = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
  const results = await db
    .select({
      celebration: celebration,
      celebrationType: {
        picture: celebrationType.picture,
      },
      author: {
        id: user.userId,
        alias: user.alias,
      },
    })
    .from(celebration)
    .leftJoin(celebrationType, eq(celebration.celebrationType, celebrationType.celebrationTypeId))
    .leftJoin(user, eq(celebration.author, user.userId))
    .innerJoin(guest, eq(celebration.celebrationId, guest.celebrationId))
    .where(
      and(
        eq(guest.userId, id),
        lt(celebration.date, new Date().toISOString()),
      ),
    )
    .orderBy(desc(celebration.date))

  if (!results.length) return null

  return results.map(result => ({
    ...result.celebration,
    celebrationType: result.celebrationType,
    author: result.author,
  })) as CelebrationWithPictureAndAuthor[]
}

/**
 * Retrieves the number of guests for a specific celebration
 * @param {string} id - Celebration ID
 * @returns {Promise<number | null>} The number of guests or null if not found
 */
export const getNumberGuestsByCelebration = async (id: string): Promise<number | null> => {
  return await db.$count(guest, eq(guest.celebrationId, id))
}

/**
 * Retrieves the list of guests for a specific celebration, including user and avatar details
 * @param {string} id - Celebration ID
 * @returns {Promise<GuestWithUserInfo[] | null>} The list of guests or null if no guests are found
 */
export const getGuestsByCelebration = async (id: string): Promise<GuestWithUserInfo[] | null> => {
  const results = await db
    .select()
    .from(guest)
    .leftJoin(user, eq(guest.userId, user.userId))
    .leftJoin(avatar, eq(user.avatar, avatar.avatarId))
    .where(eq(guest.celebrationId, id))

  if (!results.length) return null

  return results.map(row => ({
    guestId: row.guest.guestId,
    celebrationId: row.guest.celebrationId,
    isComing: row.guest.isComing,
    createdAt: row.guest.createdAt,
    userId: {
      alias: row.user!.alias,
      email: row.user!.email,
      userId: row.user!.userId,
      avatar: row.avatar
        ? {
            picture: row.avatar.picture,
            avatarId: row.avatar.avatarId,
            createdAt: row.avatar.createdAt,
            pictureDescription: row.avatar.pictureDescription,
          }
        : null,
    },
  }))
}

/**
 * Retrieves the list of guests who confirmed attendance for a specific celebration
 * Includes user details and dietary restrictions
 * @param {string} id - Celebration ID
 * @returns {Promise<GuestWithUserInfo[] | null>} The list of confirmed guests or null if none are found
 */
export const getComingGuestsByCelebration = async (id: string): Promise<GuestWithUserInfo[] | null> => {
  const results = await db
    .select()
    .from(guest)
    .leftJoin(user, eq(guest.userId, user.userId))
    .leftJoin(avatar, eq(user.avatar, avatar.avatarId))
    .where(
      and(
        eq(guest.celebrationId, id),
        eq(guest.isComing, true),
      ),
    )

  if (!results.length) return null

  return results.map(row => ({
    guestId: row.guest.guestId,
    celebrationId: row.guest.celebrationId,
    isComing: row.guest.isComing,
    createdAt: row.guest.createdAt,
    userId: {
      alias: row.user!.alias,
      email: row.user!.email,
      userId: row.user!.userId,
      isLOVegetarian: row.user!.isLOVegetarian,
      isOVegetarian: row.user!.isOVegetarian,
      isLVegetarian: row.user!.isLVegetarian,
      isVegetalien: row.user!.isVegetalien,
      isVegan: row.user!.isVegan,
      isPescetarian: row.user!.isPescetarian,
      isFrugivore: row.user!.isFrugivore,
      isRawfoodist: row.user!.isRawfoodist,
      hasGlutenAllergy: row.user!.hasGlutenAllergy,
      hasCrustaceansAllergy: row.user!.hasCrustaceansAllergy,
      hasEggsAllergy: row.user!.hasEggsAllergy,
      hasPeanutsAllergy: row.user!.hasPeanutsAllergy,
      hasFishAllergy: row.user!.hasFishAllergy,
      hasSoyAllergy: row.user!.hasSoyAllergy,
      hasMilkAllergy: row.user!.hasMilkAllergy,
      hasNutsAllergy: row.user!.hasNutsAllergy,
      hasCeleryAllergy: row.user!.hasCeleryAllergy,
      hasMustardAllergy: row.user!.hasMustardAllergy,
      hasSesameAllergy: row.user!.hasSesameAllergy,
      hasSulfiteAllergy: row.user!.hasSulfiteAllergy,
      hasLupinAllergy: row.user!.hasLupinAllergy,
      hasSellfishAllergy: row.user!.hasSellfishAllergy,
      avatar: row.avatar
        ? {
            picture: row.avatar.picture,
            avatarId: row.avatar.avatarId,
            createdAt: row.avatar.createdAt,
            pictureDescription: row.avatar.pictureDescription,
          }
        : null,
    },
  }))
}

/**
 * Retrieves all avatars stored in the database
 * @returns {Promise<Avatar[]>} The list of avatars
 */
export async function getAvatars(): Promise<Avatar[]> {
  return db.select().from(avatar)
}

/**
 * Creates a new celebration event in the database
 * @param {NewCelebrationData} newCelebrationData - The data of the new celebration
 * @returns {Promise<Celebration | null>} The created celebration or null if creation failed
 */
export const newCelebration = async (newCelebrationData: NewCelebrationData): Promise<Celebration | null> => {
  const result = await db
    .insert(celebration)
    .values(newCelebrationData)
    .returning()

  return result[0] || null
}

/**
 * Checks if a user is already a guest at a specific celebration
 * @param {string} userId - User ID
 * @param {string} celebrationId - Celebration ID
 * @returns {Promise<boolean>} True if the user is already a guest, false otherwise
 */
export const isExistingGuest = async (userId: string, celebrationId: string): Promise<boolean> => {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(guest)
    .where(and(
      eq(guest.userId, userId),
      eq(guest.celebrationId, celebrationId,
      )))

  return result[0].count > 0
}

/**
 * Adds a new guest to a celebration
 * @param {NewGuestData} newGuestData - The data of the new guest
 * @returns {Promise<Guest | null>} The created guest entry or null if creation failed
 */
export const newGuest = async (newGuestData: NewGuestData): Promise<Guest | null> => {
  const result = await db
    .insert(guest)
    .values(newGuestData)
    .returning()

  return result[0] || null
}

/**
 * Deletes a user from the database
 * @param {string} id - User ID
 * @returns {Promise<boolean>} True if the user was deleted, false otherwise
 */
export const deleteUser = async (id: string): Promise<boolean> => {
  const result = await db
    .delete(user)
    .where(eq(user.userId, id))
    .returning()

  return result.length > 0
}

/**
 * Deletes a celebration from the database
 * @param {string} celebrationId - Celebration ID
 * @returns {Promise<boolean>} True if the celebration was deleted, false otherwise
 */
export const deleteCelebration = async (celebrationId: string): Promise<boolean> => {
  const result = await db
    .delete(celebration)
    .where(eq(celebration.celebrationId, celebrationId))
    .returning()

  return result.length > 0
}
