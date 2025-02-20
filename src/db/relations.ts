import { relations } from 'drizzle-orm/relations'
import { celebration, guest, user, celebrationType, avatar, users } from './schema'

export const guestRelations = relations(guest, ({ one }) => ({
  celebration: one(celebration, {
    fields: [guest.celebrationId],
    references: [celebration.celebrationId],
  }),
  user: one(user, {
    fields: [guest.userId],
    references: [user.userId],
  }),
}))

export const celebrationRelations = relations(celebration, ({ one, many }) => ({
  guests: many(guest),
  user: one(user, {
    fields: [celebration.author],
    references: [user.userId],
  }),
  celebrationType: one(celebrationType, {
    fields: [celebration.celebrationType],
    references: [celebrationType.celebrationTypeId],
  }),
}))

export const userRelations = relations(user, ({ one, many }) => ({
  guests: many(guest),
  celebrations: many(celebration),
  avatar: one(avatar, {
    fields: [user.avatar],
    references: [avatar.avatarId],
  }),
  usersInAuth: one(users, {
    fields: [user.userId],
    references: [users.id],
  }),
}))

export const celebrationTypeRelations = relations(celebrationType, ({ many }) => ({
  celebrations: many(celebration),
}))

export const avatarRelations = relations(avatar, ({ many }) => ({
  users: many(user),
}))

export const usersInAuthRelations = relations(users, ({ many }) => ({
  users: many(user),
}))
