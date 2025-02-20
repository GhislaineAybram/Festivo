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

// error format
interface ErrorResponse {
  statusCode: number
  body: { error: string }
}

interface ErrorResponseWithSuccess {
  statusCode: number
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
