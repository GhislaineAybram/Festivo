import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface User {
  id: string
  firstname: string
  lastname: string
  nickname: string
  email: string
  password: string
  created_at: string
  avatar: string
}

export interface Celebration {
  id: string
  name: string
  description: string
  address: string
  date: string
  hour: string
  author: number
  celebration_type: number
  created_at: string
}

export const getUsers = async () => {
  const { data } = await supabase
    .from('user')
    .select('*')
  return data
}

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await supabase
    .from('user')
    .select('*')
    .eq('user_id', id)
  return data ? data[0] : null
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const { data } = await supabase
    .from('user')
    .select('*')
    .eq('email', email) 
  return data && data.length > 0 ? data[0] : null
}

export const getCelebrations = async () => {
  const { data } = await supabase
    .from('celebration')
    .select('*')
    return data
}

export const getCelebrationById = async (id: string): Promise<Celebration> => {
  const { data } = await supabase
    .from('celebration')
    .select('*')
    .eq('celebration_id', id)
    return data ? data[0] : null
}

export const getCelebrationByAuthor = async (id: string): Promise<Celebration> => {
  const { data } = await supabase
    .from('celebration')
    .select('*')
    .eq('author_id', id)
    return data ? data[0] : null
}

export const getCelebrationAuthorName = async (id: string): Promise<User> => {
  const { data } = await supabase
    .from('celebration')
    .select('*, author:user(*)')
    .eq('author_id', id)
    .single();
    return data ? data.author?.firstname : null;
}
