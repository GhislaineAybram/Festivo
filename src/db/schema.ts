import { pgTable, foreignKey, pgPolicy, uuid, boolean, timestamp, varchar, date, time, unique, pgSchema } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

const authSchema = pgSchema('auth')

export const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
})

export const guest = pgTable('guest', {
  guestId: uuid('guest_id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id').notNull(),
  celebrationId: uuid('celebration_id').notNull(),
  isComing: boolean('is_coming'),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, table => [
  foreignKey({
    columns: [table.celebrationId],
    foreignColumns: [celebration.celebrationId],
    name: 'guest_celebration_id_fkey',
  }).onUpdate('cascade').onDelete('cascade'),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [user.userId],
    name: 'guest_user_id_fkey',
  }).onUpdate('cascade').onDelete('cascade'),
  pgPolicy('guest policy', { as: 'permissive', for: 'all', to: ['public'], using: sql`true` }),
])

export const avatar = pgTable('avatar', {
  avatarId: uuid('avatar_id').defaultRandom().primaryKey().notNull(),
  pictureDescription: varchar('picture_description'),
  picture: varchar(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, _table => [
  pgPolicy('avatar policy', { as: 'permissive', for: 'all', to: ['public'], using: sql`true` }),
])

export const celebrationType = pgTable('celebration_type', {
  celebrationTypeId: uuid('celebration_type_id').defaultRandom().primaryKey().notNull(),
  category: varchar(),
  picture: varchar(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, _table => [
  pgPolicy('celebration type policy', { as: 'permissive', for: 'all', to: ['public'], using: sql`true` }),
])

export const celebration = pgTable('celebration', {
  celebrationId: uuid('celebration_id').defaultRandom().primaryKey().notNull(),
  celebrationType: uuid('celebration_type'),
  name: varchar(),
  description: varchar(),
  address: varchar(),
  date: date(),
  hour: time(),
  author: uuid().notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, table => [
  foreignKey({
    columns: [table.author],
    foreignColumns: [user.userId],
    name: 'celebration_author_fkey',
  }).onUpdate('cascade').onDelete('cascade'),
  foreignKey({
    columns: [table.celebrationType],
    foreignColumns: [celebrationType.celebrationTypeId],
    name: 'celebration_celebration_type_fkey',
  }).onUpdate('cascade').onDelete('set default'),
  pgPolicy('Celebration policy', { as: 'permissive', for: 'all', to: ['public'], using: sql`true` }),
])

export const user = pgTable('user', {
  alias: varchar(),
  email: varchar(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  userId: uuid('user_id').primaryKey().notNull(),
  avatar: uuid().default(sql`'1fc5e9e4-891e-4360-b912-ed11b7ba3c1a'`),
  isLOVegetarian: boolean('is_l_o_vegetarian').default(false),
  isOVegetarian: boolean('is_o_vegetarian').default(false),
  isLVegetarian: boolean('is_l_vegetarian').default(false),
  isVegetalien: boolean('is_vegetalien').default(false),
  isVegan: boolean('is_vegan').default(false),
  isPescetarian: boolean('is_pescetarian').default(false),
  isFrugivore: boolean('is_frugivore').default(false),
  isRawfoodist: boolean('is_rawfoodist').default(false),
  hasGlutenAllergy: boolean('has_gluten_allergy').default(false),
  hasCrustaceansAllergy: boolean('has_crustaceans_allergy').default(false),
  hasEggsAllergy: boolean('has_eggs_allergy').default(false),
  hasPeanutsAllergy: boolean('has_peanuts_allergy').default(false),
  hasFishAllergy: boolean('has_fish_allergy').default(false),
  hasSoyAllergy: boolean('has_soy_allergy').default(false),
  hasMilkAllergy: boolean('has_milk_allergy').default(false),
  hasNutsAllergy: boolean('has_nuts_allergy').default(false),
  hasCeleryAllergy: boolean('has_celery_allergy').default(false),
  hasMustardAllergy: boolean('has_mustard_allergy').default(false),
  hasSesameAllergy: boolean('has_sesame_allergy').default(false),
  hasSulfiteAllergy: boolean('has_sulfite_allergy').default(false),
  hasLupinAllergy: boolean('has_lupin_allergy').default(false),
  hasSellfishAllergy: boolean('has_sellfish_allergy').default(false),
}, table => [
  foreignKey({
    columns: [table.avatar],
    foreignColumns: [avatar.avatarId],
    name: 'user_avatar_fkey',
  }).onUpdate('cascade').onDelete('set default'),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: 'user_user_id_fkey',
  }).onUpdate('cascade').onDelete('cascade'),
  unique('user_alias_key').on(table.alias),
  unique('user_email_key').on(table.email),
  unique('user_user_id_key').on(table.userId),
  pgPolicy('user policy', { as: 'permissive', for: 'all', to: ['public'], using: sql`true` }),
])
