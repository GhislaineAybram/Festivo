import { createClient } from '@supabase/supabase-js'
import type { Celebration, User, UserAvatar } from './types'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export const getUsers = async (): Promise<User[]> => {
  const { data } = await supabase
    .from('user')
    .select(`
      *,
      avatar:avatar(picture),
      avatar:avatar(picture_description)
      `)
  return data ? data : null
}

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await supabase
    .from('user')
    .select(`
      *,
      avatar:avatar(avatar_id, picture)
      `)
    .eq('user_id', id)
  return data ? data[0] : null
}

export const updateAvatarByUser = async (id: string, newAvatar: string): Promise<User> => {
  const { data } = await supabase
    .from('user')
    .update({ avatar: newAvatar })
    .eq('user_id', id)
    .select()
  return data ? data[0] : null
}

export const getCelebrationById = async (id: string): Promise<Celebration> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture),
      author:user(firstname)
    `)
    .eq('celebration_id', id)
  return data ? data[0] : null
}

export const getNumberGuestsByCelebration = async (id: string): Promise<number> => {
  const { count } = await supabase
    .from('guest')
    .select('*', { count: 'exact', head: true })
    .eq('celebration_id', id)
  return count || null
}

export const getUpcomingCelebrationsByAuthor = async (id: string): Promise<Celebration[] | null> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture)
    `)
    .eq('author', id)
    .gte('date', new Date().toISOString())
    .order('date', { ascending: true })
  return data ? data : null
}

export const getPastCelebrationsByAuthor = async (id: string): Promise<Celebration[] | null> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture)
    `)
    .eq('author', id)
    .lt('date', new Date().toISOString())
    .order('date', { ascending: false })
  return data ? data : null
}

export const getUpcomingCelebrationsByGuest = async (id: string): Promise<Celebration[] | null> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture),
      guest!inner(user_id,user_id)
    `)
    .eq('guest.user_id', id)
    .gte('date', new Date().toISOString())
    .order('date', { ascending: true })
  return data ? data : null
}

export const getPastCelebrationsByGuest = async (id: string): Promise<Celebration[] | null> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
      celebration_type:celebration_type(picture),
      guest!inner(user_id,user_id)
    `)
    .eq('guest.user_id', id)
    .lt('date', new Date().toISOString())
    .order('date', { ascending: false })
  return data ? data : null
}

export const getAvatars = async (): Promise<UserAvatar[]> => {
  const { data } = await supabase
    .from('avatar')
    .select('*')
  return data ? data : null
}

export const newCelebration = async (newCelebrationData: Partial<Celebration>): Promise<Celebration> => {
  const { data } = await supabase
    .from('celebration')
    .insert([newCelebrationData])
    .select('*')
  return data ? data[0] : null
}
