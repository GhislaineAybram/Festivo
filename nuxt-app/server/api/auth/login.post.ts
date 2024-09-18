// routes.ts
import { getUserByEmail } from "~~/db-queries";
import bcrypt from "bcrypt";

async function handleUserValidation(email: string, password: string) {
    // verify the user, email password etc
    const user = await getUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return null; // Utilisateur non trouvé ou mot de passe invalide
    }

    return {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
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

      const session = await getUserSession(event);

      await setUserSession(event, { user });

      return { 
        success: true, 
        message: "Login successful",
        user: user,
    };

    } catch (error) {
      console.error(error);

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
