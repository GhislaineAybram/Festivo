// routes.ts
import { createUser } from "~~/db-queries";

export default defineEventHandler(async (event) => {
  try {
    const { firstname, lastname, email, password } = await readBody(event);
    
    // validate the required fields
    if (!firstname || !lastname || !email || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: "All fields are required.",
      });
    };

    // create a new user
    const newUser = await createUser(
      firstname, 
      lastname, 
      email, 
      password
    );

    setResponseStatus(event, 201);
    return newUser;

  } catch (error) {
    console.log(error);

    // Vérifier si l'erreur est un objet avec une propriété `statusCode`
    if (error instanceof Error && 'statusCode' in error) {
      throw error;
    }

    // Si l'erreur n'a pas de `statusCode`, créer une erreur avec un code d'état 500
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }

});
