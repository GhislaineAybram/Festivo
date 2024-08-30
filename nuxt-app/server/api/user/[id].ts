import { getUserById } from "~~/db-queries";

export default defineEventHandler(async (event) => {
  try {
    // Extraire l'ID de l'URL
    const id = event.context.params?.id;

    if (!id) {
      return {
        statusCode: 400,
        body: { error: "User ID is required" },
      };
    }

    // Convertir l'ID en nombre
    const userId = parseInt(String(id), 10);

    if (isNaN(userId)) {
      return {
        statusCode: 400,
        body: { error: "Invalid User ID" },
      };
    }

    const user = await getUserById(userId);

    if (!user) {
      return {
        statusCode: 404,
        body: { error: "User not found" },
      };
    }

    return user;
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: "Failed to fetch user" },
    };
  }
});
