// // user.put
import { updateFoodInformationByUser } from '~/supabase'

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const userId = getRouterParam(event, 'id')
    if (!userId) {
      return {
        statusCode: 400,
        body: { error: 'User ID is required' },
      }
    };

    const updatedUserData = await readBody(event)

    if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
      return {
        statusCode: 400,
        body: { error: 'No updates provided or invalid data' },
      }
    }

    // Boucle sur les clés du body pour mettre à jour chaque champ
    const updates = []
    for (const [field, value] of Object.entries(updatedUserData)) {
      if (typeof value !== 'boolean') {
        return {
          statusCode: 400,
          body: { error: `Invalid value for field ${field}. Expected a boolean.` },
        }
      }

      const update = await updateFoodInformationByUser(userId, field, value)
      updates.push(update)
    }

    if (updates.some(update => update === null)) {
      return {
        statusCode: 500,
        body: { error: 'One or more fields failed to update' },
      }
    }

    // Réponse finale avec toutes les mises à jour réussies
    return {
      statusCode: 200,
      body: { message: 'User food information updated successfully', updates },
    }
  }
  catch (error) {
    console.error('Error updating user:', error)
    return {
      statusCode: 500,
      body: { error: 'Failed to update user information' },
    }
  }
})
