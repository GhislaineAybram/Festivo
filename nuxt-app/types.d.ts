export interface User {
  user_id: string
  firstname: string
  lastname: string
  alias: string
  email: string
  password: string
  created_at: string
  avatar: string
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

export interface CelebrationType {
  celebration_type_id: string
  category: string
  picture: string
  created_at: string
}
