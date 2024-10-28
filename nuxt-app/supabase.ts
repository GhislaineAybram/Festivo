import { createClient } from '@supabase/supabase-js'
import type { Celebration, User } from './types'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await supabase
    .from('user')
    .select('*')
    .eq('user_id', id)
  return data ? data[0] : null
}

export const getCelebrationById = async (id: string): Promise<Celebration> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
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

export const getCelebrationsByAuthor = async (id: string): Promise<Celebration[] | null> => {
  const { data } = await supabase
    .from('celebration')
    .select('*')
    .eq('author', id)
  return data ? data : null
}

export const getCelebrationsByGuest = async (id: string): Promise<Celebration[] | null> => {
  const { data } = await supabase
    .from('celebration')
    .select(`
      *,
      guest!inner(user_id,user_id)
    `)
    .eq('guest.user_id', id)
  return data ? data : null
}

export const newCelebration = async (newCelebrationData: Partial<Celebration>): Promise<Celebration> => {
  const { data } = await supabase
    .from('celebration')
    .insert([newCelebrationData])
    .select('*')
  return data ? data[0] : null
}
