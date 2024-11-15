export interface User {
  user_id: string
  firstname: string
  lastname: string
  alias: string
  email: string
  password: string
  created_at: string
  avatar: UserAvatar
}

export interface Celebration {
  celebration_id: string
  name: string
  description: string
  address: string
  date: string
  hour: string
  author: User
  celebration_type: CelebrationType
  created_at: string
}

// TODO: change the type later
export interface Guest {
  guest_id: string
  user_id: any
  celebration_id: Celebration
  is_coming: boolean | null
  created_at: string
}

export interface GuestsList {
  nb_guests: number
  guests_list: Array<Guest>
}

export interface CelebrationType {
  celebration_type_id: string
  category: string
  picture: string
  created_at: string
}

export interface Avatar {
  avatar_id: string
  picture_description: string
  picture: string
  created_at: string
}
