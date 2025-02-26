/**
 * @file types.d.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * Types used for the project
 */

export type CelebrationType = InferSelectModel<typeof celebrationType>
export type Celebration = InferSelectModel<typeof celebration>
export type Avatar = InferSelectModel<typeof avatar>
export type User = InferSelectModel<typeof user>
export type Guest = InferSelectModel<typeof guest>

// user formats
export type UserWithAvatar = InferSelectModel<typeof user> & {
  avatar: Pick<Avatar, 'picture' | 'pictureDescription'> | null
}

// celebration formats
export type CelebrationWithPictureAndAuthor = InferSelectModel<typeof celebration> & {
  celebrationType: Pick<InferSelectModel<typeof celebrationType>, 'picture'>
  author: Pick<InferSelectModel<typeof user>, 'userId', 'alias'>
}
export type NewCelebrationData = Omit<InferSelectModel<typeof celebration>, 'celebrationId', 'createdAt'>
export type UpdateCelebrationData = Omit<InferSelectModel<typeof celebration>, 'celebrationId', 'createdAt', 'author'>

// guest formats
export type GuestWithUserInfo = InferSelectModel<typeof guest> & {
  userId: Pick<User, 'userId' | 'email' | 'alias'> & {
    avatar?: Avatar
  }
}
export type NewGuestData = Pick<InferSelectModel<typeof guest>, 'userId' | 'celebrationId'>

// HTTP codes
// 200 OK : indique que la demande a réussi.
// 201 Créé : indique la création réussie d'une nouvelle ressource.
// 204 Aucun contenu : indique la demande réussie sans contenu supplémentaire à renvoyer.
// 400 Bad Request : indique une entrée mal formée ou invalide du client.
// 401 Non autorisé : indique des informations d'authentification manquantes ou incorrectes.
// 403 Interdit : indique des droits d'accès insuffisants à la ressource demandée.
// 404 Not Found : indique que la ressource demandée n’a pas été trouvée.
// 500 Erreur interne du serveur : indique une erreur générale côté serveur.

interface ResponseWithSuccess {
  body: {
    success: boolean
    message?: string
    error?: string }
}

interface CelebrationGuestsInfo {
  nb_guests: number
  guests_list: GuestWithUserInfo[]
  coming_guests_list: GuestWithUserInfo[]
  restrictionsCounts
}

type UserRestrictions =
  | isLOVegetarian
  | isOVegetarian
  | isLVegetarian
  | isVegetalien
  | isVegan
  | isPescetarian
  | isFrugivore
  | isRawfoodist
  | hasGlutenAllergy
  | hasCrustaceansAllergy
  | hasEggsAllergy
  | hasPeanutsAllergy
  | hasFishAllergy
  | hasSoyAllergy
  | hasMilkAllergy
  | hasNutsAllergy
  | hasCeleryAllergy
  | hasMustardAllergy
  | hasSesameAllergy
  | hasSulfiteAllergy
  | hasLupinAllergy
  | hasSellfishAllergy

type CelebrationGuestsResponse = CelebrationGuestsInfo | ErrorResponse

interface CelebrationsByAuthor {
  past: CelebrationWithPictureAndAuthor[]
  upcoming: CelebrationWithPictureAndAuthor[]
}

type CelebrationsByAuthorResponse = CelebrationsByAuthor | ErrorResponse

interface CelebrationsByGuest {
  past: CelebrationWithPictureAndAuthor[]
  upcoming: CelebrationWithPictureAndAuthor[]
}

type CelebrationsByGuestResponse = CelebrationsByGuest | ErrorResponse
