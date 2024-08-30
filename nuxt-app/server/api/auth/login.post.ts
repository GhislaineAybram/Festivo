// routes.ts
import { getUserByEmail } from "~~/db-queries";

async function handleUserValidation(email: string, password: string) {
    // verify the user, email password etc
    const user = await getUserByEmail(email);

    if (!user || user.password !== password) {
        return null; // Utilisateur non trouvé ou mot de passe invalide
    }

    return {
      email: user.email,
    }
}
  
export default defineEventHandler(async (event) => {
    try {
      const { email, password } = await readBody(event);
      const user = await handleUserValidation(email, password);
       
      if (!user) {
        throw createError({
          statusCode: 401,
          statusMessage: "Invalid email or password.",
        });
      }

      await setUserSession(event, { user });

      return { success: true, message: "Login successful" };

    } catch (error) {
      console.log(error);

      // Vérifier si l'erreur est un objet avec une propriété `statusCode`
      if (error instanceof Error && 'statusCode' in error) {
        return {
            statusCode: error.statusCode,
            message: error.message,
          };
      }
  
      // Si l'erreur n'a pas de `statusCode`, créer une erreur avec un code d'état 500
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  });
