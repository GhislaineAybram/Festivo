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
    const body = await readBody(event) // Attends que le corps de la requête soit résolu
    console.log('Read Body:', body)

    const dbField = Object.keys(body)[0] // Récupère le nom du champ dynamique
    const value = body[dbField]
    console.log(readBody(event))
    console.log('Update attempt - ID:', userId, 'Field:', dbField, 'Value:', value)

    if (dbField === undefined) {
      return {
        statusCode: 400,
        body: { error: 'Field, and value are required' },
      }
    }
    console.log(dbField)
    console.log(value)
    const updatedUser = await updateFoodInformationByUser(userId, dbField, value)

    if (!updatedUser) {
      return {
        statusCode: 404,
        body: { error: 'Failed to update user food information' },
      }
    }
    return updatedUser
  }
  catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: { error: 'Failed to update user information' },
    }
  }
})
