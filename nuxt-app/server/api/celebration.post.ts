// import { newCelebration } from '~~/supabase'
// import { serverSupabaseClient } from '#supabase/server';

// export default defineEventHandler(async (event) => {
//   try {
//     // Récupérer le corps de la requête
//     const body = await readBody(event);

//     // Vérifie si les données essentielles sont présentes
//     if (!body.title || !body.description || !body.date) {
//       return {
//         statusCode: 400,
//         body: { error: 'Missing required celebration data' },
//       }
//     }

//     // Récupérer le client Supabase
//     const client = serverSupabaseClient(event);

//     // Récupérer l'utilisateur connecté en utilisant les cookies
//     const { data: { user }, error: userError } = await client.auth.getUser();

//     if (userError || !user) {
//       return {
//         statusCode: 401,
//         body: { error: 'User must be logged in to create a celebration' },
//       };
//     }

//     // Prépare les données pour la création de l'événement
//     const celebrationData = {
//       ...body,
//       author: user.id,
//     };

//     const celebration = await newCelebration(celebrationData)

//     if (!celebration) {
//       return {
//         statusCode: 404,
//         body: { error: 'Failed to create celebration' },
//       }
//     }

//     return {
//       statusCode: 201,
//       body: celebration,
//     }
//   }
//   catch (error) {
//     console.error(error)
//     return {
//       statusCode: 500,
//       body: { error: 'Server error while creating celebration' },
//     }
//   }
// })
