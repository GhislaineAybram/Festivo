// // user.put
// import { supabase } from '~/supabase'

// export default defineEventHandler(async (event) => {
//   try {
//     // Extraire l'ID de l'URL
//     const id = getRouterParam(event, 'id')
//     if (!id) {
//       return {
//         statusCode: 400,
//         body: { error: 'User ID is required' },
//       }
//     };

//     const updatedUserData = await await readBody(event)

//     if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
//       return {
//         statusCode: 400,
//         message: 'No updates provided',
//       }
//     }

//     const updatedUser = await supabase.auth.updateUser(updatedUserData)

//     if (!updatedUser) {
//       return {
//         statusCode: 404,
//         body: { error: 'Failed to update user informations' },
//       }
//     };

//     return updatedUser
//   }
//   catch (error) {
//     console.error('Error updating user:', error)
//     return {
//       statusCode: 500,
//       body: { error: 'Failed to fetch user' },
//     }
//   }
// })
