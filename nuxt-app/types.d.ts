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
  author: string
  celebration_type: string
  created_at: string
}
