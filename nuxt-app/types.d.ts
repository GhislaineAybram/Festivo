type User = Tables<'user'>
type Avatar = Tables<'avatar'>
type UserWithAvatar = Tables<'user'> & {
  avatar?: Tables<'avatar'>
}
export type Celebration = {
  celebration_id: string
  created_at: string
  address: string | null
  author: string
  celebration_type: string | null
  date: string | null
  description: string | null
  hour: string | null
  name: string | null
}
type CelebrationType = Tables<'celebration_type'>
type CelebrationWithPictureAndAuthor = Tables<'celebration'> & {
  celebration_type?: Pick<CelebrationType, 'picture'>
  author?: Pick<Tables<'user'>, 'firstname'>
}
type CelebrationWithGuestsAndType = Tables<'celebration'> & {
  celebration_type?: Pick<CelebrationType, 'picture'>
  guest?: {
    user_id: string
  }[]
}
type Guest = Tables<'guest'>
type GuestWithUserInfo = Guest & {
  user_id: Pick<User, 'user_id' | 'firstname' | 'lastname' | 'email' | 'alias'> & {
    avatar?: Avatar
  }
}
type NewCelebrationData = Omit<
  Celebration,
  'celebration_id' | 'created_at'
>

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
}

type CelebrationGuestsResponse = CelebrationGuestsInfo | ErrorResponse

interface CelebrationsByAuthor {
  past: CelebrationWithPictureAndAuthor[]
  upcoming: CelebrationWithPictureAndAuthor[]
}

type CelebrationsByAuthorResponse = CelebrationsByAuthor | ErrorResponse

interface CelebrationsByGuest {
  past: CelebrationWithGuestsAndType[]
  upcoming: CelebrationWithGuestsAndType[]
}

type CelebrationsByGuestResponse = CelebrationsByGuest | ErrorResponse
