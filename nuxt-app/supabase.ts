import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'
import type { Avatar, Celebration, CelebrationWithGuestsAndType, CelebrationWithPictureAndAuthor, Guest, GuestWithUserInfo, NewCelebrationData, NewGuestData, User, UserWithAvatar } from './types'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export const getUsers = async (): Promise<UserWithAvatar[] | null> => {
  const { data, error } = await supabase
    .from('user')
    .select(`
      *,
      avatar:avatar(picture),
      avatar:avatar(picture_description)
      `)

  if (error) {
    console.error('Error fetching users with avatars:', error)
    return null
  }
  return data as UserWithAvatar[]
}

export const getUserById = async (id: string): Promise<UserWithAvatar | null> => {
  const { data, error } = await supabase
    .from('user')
    .select(`
      *,
      avatar:avatar(avatar_id, picture)
      `)
    .eq('user_id', id)
    .single()
  if (error) {
    console.error('Error fetching user with avatar:', error)
    return null
  }
  return data as UserWithAvatar
}

export const updateAvatarByUser = async (id: string, newAvatar: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('user')
    .update({ avatar: newAvatar })
    .eq('user_id', id)
    .select()
  if (error) {
    console.error('Error updating user informations:', error)
    return null
  }
  return data ? data[0] : null
}

export const getCelebrationById = async (id: string): Promise<CelebrationWithPictureAndAuthor | null> => {
  const { data, error } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture, category),
      author:user(firstname)
    `)
    .eq('celebration_id', id)
    .single()
  if (error) {
    console.error('Error fetching celebration:', error)
    return null
  }
  return data as CelebrationWithPictureAndAuthor
}

export const getNumberGuestsByCelebration = async (id: string): Promise<number | null> => {
  const { count, error } = await supabase
    .from('guest')
    .select('*', { count: 'exact', head: true })
    .eq('celebration_id', id)
  if (error) {
    console.error('Error fetching guests number of the celebration:', error)
    return null
  }
  return count || null
}

export const getGuestsByCelebration = async (id: string): Promise<GuestWithUserInfo[] | null> => {
  const { data, error } = await supabase
    .from('guest')
    .select(`
      guest_id,
      celebration_id,
      is_coming,
      created_at,
      user_id:user(
        user_id,
        firstname,
        lastname,
        email,
        alias,
        avatar:avatar(*)
      )
    `)
    .eq('celebration_id', id)
  if (error) {
    console.error('Error fetching guests list:', error)
    return []
  }
  return data as GuestWithUserInfo[]
}

export const getUpcomingCelebrationsByAuthor = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
  const { data, error } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture)
    `)
    .eq('author', id)
    .gte('date', new Date().toISOString())
    .order('date', { ascending: true })
  if (error) {
    console.error('Error fetching celebrations list:', error)
    return []
  }
  return data as CelebrationWithPictureAndAuthor[]
}

export const getPastCelebrationsByAuthor = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
  const { data, error } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture)
    `)
    .eq('author', id)
    .lt('date', new Date().toISOString())
    .order('date', { ascending: false })
  if (error) {
    console.error('Error fetching celebrations list:', error)
    return []
  }
  return data as CelebrationWithPictureAndAuthor[]
}

export const getUpcomingCelebrationsByGuest = async (id: string): Promise<CelebrationWithGuestsAndType[] | null> => {
  const { data, error } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture),
      guest!inner(user_id,user_id)
    `)
    .eq('guest.user_id', id)
    .gte('date', new Date().toISOString())
    .order('date', { ascending: true })
  if (error) {
    console.error('Error fetching celebrations list:', error)
    return []
  }
  return data as CelebrationWithGuestsAndType[]
}

export const getPastCelebrationsByGuest = async (id: string): Promise<CelebrationWithGuestsAndType[] | null> => {
  const { data, error } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture),
      guest!inner(user_id,user_id)
    `)
    .eq('guest.user_id', id)
    .lt('date', new Date().toISOString())
    .order('date', { ascending: false })
  if (error) {
    console.error('Error fetching celebrations list:', error)
    return []
  }
  return data as CelebrationWithGuestsAndType[]
}

export const getAvatars = async (): Promise<Avatar[]> => {
  const { data, error } = await supabase
    .from('avatar')
    .select('*')
  if (error) {
    console.error('Error fetching avatars list:', error)
    return []
  }
  return data as Avatar[]
}

export const newCelebration = async (newCelebrationData: NewCelebrationData): Promise<Celebration | null> => {
  const { data, error } = await supabase
    .from('celebration')
    .insert([newCelebrationData])
    .select('*')
  if (error) {
    console.error('Error creating a new celebration:', error)
    return null
  };
  return data ? data[0] : null
}

export const isExistingGuest = async (user_id: string, celebration_id: string): Promise<Guest | null> => {
  const { data, error } = await supabase
    .from('guest')
    .select('*')
    .eq('user_id', user_id)
    .eq('celebration_id', celebration_id)
    .single()
  if (error) {
    console.error('Error searching a guest:', error)
    return null
  };
  return data || null
}

export const newGuest = async (newGuestData: NewGuestData): Promise<Guest | null> => {
  const { data, error } = await supabase
    .from('guest')
    .insert([newGuestData])
    .select('*')
  if (error) {
    console.error('Error creating a new guest:', error)
    return null
  };
  return data ? data[0] : null
}

export const deleteUser = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('user')
    .delete()
    .eq('user_id', id)
  if (error) {
    console.error('Error deleting a user:', error)
    return false
  };
  return true // Retourne `true` si la suppression a réussi
}
