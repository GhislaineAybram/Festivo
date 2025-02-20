import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import { and, asc, desc, eq, gte, lt } from 'drizzle-orm'
import postgres from 'postgres'
import * as schema from './db/schema'

import { avatar, celebration, celebrationType, guest, user } from './db/schema'
import type { Avatar, Celebration, CelebrationType, CelebrationWithPictureAndAuthor, Guest, GuestWithUserInfo, NewCelebrationData, NewGuestData, UpdateCelebrationData, User, UserWithAvatar } from '~/types'

const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle(client, { schema })

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

export const updateAvatarByUser = async (id: string, newAvatar: string): Promise<User | null> => {
  const result = await db
    .update(user)
    .set({ avatar: newAvatar })
    .where(eq(user.userId, id))
    .returning()

  return result[0] || null
}

export const updateFoodInformationByUser = async (id: string, restriction: string, value: boolean): Promise<User | null> => {
  const result = await db
    .update(user)
    .set({ [restriction]: value })
    .where(eq(user.userId, id))
    .returning()

  return result[0] || null
}

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

export const updateCelebrationById = async (id: string, newCelebrationData: UpdateCelebrationData): Promise<CelebrationWithPictureAndAuthor | null> => {
  const result = await db
    .update(celebration)
    .set(newCelebrationData)
    .where(eq(celebration.celebrationId, id))
    .returning()

  return result[0] || null
}

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

export async function getCelebrationTypes(): Promise<CelebrationType[] | null> {
  return db.select().from(celebrationType)
}

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

export const getNumberGuestsByCelebration = async (id: string): Promise<number | null> => {
  return await db.$count(guest, eq(guest.celebrationId, id))
}

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

export async function getAvatars(): Promise<Avatar[]> {
  return db.select().from(avatar)
}

export const newCelebration = async (newCelebrationData: NewCelebrationData): Promise<Celebration | null> => {
  const result = await db
    .insert(celebration)
    .values(newCelebrationData)
    .returning()

  return result[0] || null
}

export const isExistingGuest = async (userId: string, celebrationId: string): Promise<Guest | null> => {
  const result = await db.query.guest.findFirst({
    where: and(
      eq(guest.userId, userId),
      eq(guest.celebrationId, celebrationId),
    ),
  })

  return result || null
}

export const newGuest = async (newGuestData: NewGuestData): Promise<Guest | null> => {
  const result = await db
    .insert(guest)
    .values(newGuestData)
    .returning()

  return result[0] || null
}

export const deleteUser = async (id: string): Promise<boolean> => {
  const result = await db
    .delete(user)
    .where(eq(user.userId, id))
    .returning()

  return result.length > 0
}

export const deleteCelebration = async (celebrationId: string): Promise<boolean> => {
  const result = await db
    .delete(celebration)
    .where(eq(celebration.celebrationId, celebrationId))
    .returning()

  return result.length > 0
}
