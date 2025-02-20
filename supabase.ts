// file used to make direct request to supabase without ORM

// import { createClient } from '@supabase/supabase-js'
// import type { Database } from './database.types'
// import type { Avatar, Celebration, CelebrationType, CelebrationWithGuestsAndType, CelebrationWithPictureAndAuthor, Guest, GuestWithUserInfo, NewCelebrationData, NewGuestData, UpdateCelebrationData, User, UserWithAvatar } from './types'

// const supabaseUrl = process.env.SUPABASE_URL!
// const supabaseKey = process.env.SUPABASE_KEY!

// export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// export const getUserById = async (id: string): Promise<UserWithAvatar | null> => {
//   const { data, error } = await supabase
//     .from('user')
//     .select(`
//       *,
//       avatar:avatar(avatar_id, picture)
//       `)
//     .eq('user_id', id)
//     .single()
//   if (error) {
//     console.error('Error fetching user with avatar:', error)
//     return null
//   }
//   return data as UserWithAvatar
// }

// export const updateAvatarByUser = async (id: string, newAvatar: string): Promise<User | null> => {
//   const { data, error } = await supabase
//     .from('user')
//     .update({ avatar: newAvatar })
//     .eq('user_id', id)
//     .select()
//   if (error) {
//     console.error('Error updating user avatar:', error)
//     return null
//   }
//   return data ? data[0] : null
// }

// export const updateFoodInformationByUser = async (id: string, restriction: string, value: boolean): Promise<User | null> => {
//   const { data, error } = await supabase
//     .from('user')
//     .update({ [restriction]: value })
//     .eq('user_id', id)
//     .select()
//   if (error) {
//     console.error('Error updating user informations:', error)
//     return null
//   }
//   return data ? data[0] : null
// }

// export const updateIsComingGuest = async (userId: string, celebrationId: string, isComing: boolean): Promise<Guest | null> => {
//   const { data, error } = await supabase
//     .from('guest')
//     .update({ is_coming: isComing })
//     .eq('user_id', userId)
//     .eq('celebration_id', celebrationId)
//     .select()
//   if (error) {
//     console.error('Error updating guest isComing:', error)
//     return null
//   }
//   return data ? data[0] : null
// }

// // export const getCelebrationTypes = async (): Promise<CelebrationType[] | null> => {
// //   const { data, error } = await supabase
// //     .from('celebration_type')
// //     .select()

// //   if (error) {
// //     console.error('Error fetching celebration_type:', error)
// //     return null
// //   }
// //   return data as CelebrationType[]
// // }

// export const getCelebrationById = async (id: string): Promise<CelebrationWithPictureAndAuthor | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .select(`
//       *,
//       celebration_type:celebration_type(celebration_type_id, picture, category),
//       author:user(alias)
//     `)
//     .eq('celebration_id', id)
//     .single()
//   if (error) {
//     console.error('Error fetching celebration:', error)
//     return null
//   }
//   return data as CelebrationWithPictureAndAuthor
// }

// export const updateCelebrationById = async (id: string, newCelebrationData: UpdateCelebrationData): Promise<CelebrationWithPictureAndAuthor | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .update(newCelebrationData)
//     .eq('celebration_id', id)
//     .select()
//     .single()
//   if (error) {
//     console.error('Error updating celebration informations:', error)
//     return null
//   }
//   return data ? data : null
// }

// export const getIsComingGuest = async (userId: string, celebrationId: string): Promise<boolean | null> => {
//   const { data, error } = await supabase
//     .from('guest')
//     .select('is_coming')
//     .eq('user_id', userId)
//     .eq('celebration_id', celebrationId)
//     .single()
//   if (error) {
//     console.error('Error fetching guest response:', error)
//     return null
//   }
//   return data?.is_coming ?? null
// }

// export const getNumberGuestsByCelebration = async (id: string): Promise<number | null> => {
//   const { count, error } = await supabase
//     .from('guest')
//     .select('*', { count: 'exact', head: true })
//     .eq('celebration_id', id)
//   if (error) {
//     console.error('Error fetching guests number of the celebration:', error)
//     return null
//   }
//   return count || null
// }

// export const getGuestsByCelebration = async (id: string): Promise<GuestWithUserInfo[] | null> => {
//   const { data, error } = await supabase
//     .from('guest')
//     .select(`
//       guest_id,
//       celebration_id,
//       is_coming,
//       created_at,
//       user_id:user(
//         user_id,
//         email,
//         alias,
//         avatar:avatar(*)
//       )
//     `)
//     .eq('celebration_id', id)
//   if (error) {
//     console.error('Error fetching guests list:', error)
//     return []
//   }
//   return data as GuestWithUserInfo[]
// }

// export const getComingGuestsByCelebration = async (id: string): Promise<GuestWithUserInfo[] | null> => {
//   const { data, error } = await supabase
//     .from('guest')
//     .select(`
//       guest_id,
//       celebration_id,
//       is_coming,
//       created_at,
//       user_id:user(
//         user_id,
//         email,
//         alias,
//         avatar:avatar(*),
//         is_l_o_vegetarian,
//         is_o_vegetarian,
//         is_l_vegetarian,
//         is_vegetalien,
//         is_vegan,
//         is_pescetarian,
//         is_frugivore,
//         is_rawfoodist,
//         has_gluten_allergy,
//         has_crustaceans_allergy,
//         has_eggs_allergy,
//         has_peanuts_allergy,
//         has_fish_allergy,
//         has_soy_allergy,
//         has_milk_allergy,
//         has_nuts_allergy,
//         has_celery_allergy,
//         has_mustard_allergy,
//         has_sesame_allergy,
//         has_sulfite_allergy,
//         has_lupin_allergy,
//         has_sellfish_allergy
//       )
//     `)
//     .eq('celebration_id', id)
//     .eq('is_coming', true)
//   if (error) {
//     console.error('Error fetching coming guests list:', error)
//     return null
//   }
//   return data as GuestWithUserInfo[]
// }

// export const getUpcomingCelebrationsByAuthor = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .select(`
//       *,
//       celebration_type:celebration_type(picture)
//     `)
//     .eq('author', id)
//     .gte('date', new Date().toISOString())
//     .order('date', { ascending: true })
//   if (error) {
//     console.error('Error fetching celebrations list:', error)
//     return []
//   }
//   return data as CelebrationWithPictureAndAuthor[]
// }

// export const getPastCelebrationsByAuthor = async (id: string): Promise<CelebrationWithPictureAndAuthor[] | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .select(`
//       *,
//       celebration_type:celebration_type(picture)
//     `)
//     .eq('author', id)
//     .lt('date', new Date().toISOString())
//     .order('date', { ascending: false })
//   if (error) {
//     console.error('Error fetching celebrations list:', error)
//     return []
//   }
//   return data as CelebrationWithPictureAndAuthor[]
// }

// export const getUpcomingCelebrationsByGuest = async (id: string): Promise<CelebrationWithGuestsAndType[] | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .select(`
//       *,
//       celebration_type:celebration_type(picture),
//       guest!inner(user_id,user_id)
//     `)
//     .eq('guest.user_id', id)
//     .gte('date', new Date().toISOString())
//     .order('date', { ascending: true })
//   if (error) {
//     console.error('Error fetching celebrations list:', error)
//     return []
//   }
//   return data as CelebrationWithGuestsAndType[]
// }

// export const getPastCelebrationsByGuest = async (id: string): Promise<CelebrationWithGuestsAndType[] | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .select(`
//       *,
//       celebration_type:celebration_type(picture),
//       guest!inner(user_id,user_id)
//     `)
//     .eq('guest.user_id', id)
//     .lt('date', new Date().toISOString())
//     .order('date', { ascending: false })
//   if (error) {
//     console.error('Error fetching celebrations list:', error)
//     return []
//   }
//   return data as CelebrationWithGuestsAndType[]
// }

// // export const getAvatars = async (): Promise<Avatar[]> => {
// //   const { data, error } = await supabase
// //     .from('avatar')
// //     .select('*')
// //   if (error) {
// //     console.error('Error fetching avatars list:', error)
// //     return []
// //   }
// //   return data as Avatar[]
// // }

// export const newCelebration = async (newCelebrationData: NewCelebrationData): Promise<Celebration | null> => {
//   const { data, error } = await supabase
//     .from('celebration')
//     .insert([newCelebrationData])
//     .select('*')
//   if (error) {
//     console.error('Error creating a new celebration:', error)
//     return null
//   };
//   return data ? data[0] : null
// }

// export const isExistingGuest = async (user_id: string, celebration_id: string): Promise<Guest | null> => {
//   const { data, error } = await supabase
//     .from('guest')
//     .select('*')
//     .eq('user_id', user_id)
//     .eq('celebration_id', celebration_id)
//     .single()
//   if (error) {
//     console.error('Error searching a guest:', error)
//     return null
//   };
//   return data || null
// }

// export const newGuest = async (newGuestData: NewGuestData): Promise<Guest | null> => {
//   const { data, error } = await supabase
//     .from('guest')
//     .insert([newGuestData])
//     .select('*')
//   if (error) {
//     console.error('Error creating a new guest:', error)
//     return null
//   };
//   return data ? data[0] : null
// }

// export const deleteUser = async (id: string): Promise<boolean> => {
//   const { error } = await supabase
//     .from('user')
//     .delete()
//     .eq('user_id', id)
//   if (error) {
//     console.error('Error deleting a user:', error)
//     return false
//   };
//   return true
// }

// export const deleteCelebration = async (celebrationId: string): Promise<boolean> => {
//   const { error } = await supabase
//     .from('celebration')
//     .delete()
//     .eq('celebration_id', celebrationId)
//   if (error) {
//     console.error('Error deleting a celebration:', error)
//     return false
//   };
//   return true
// }
