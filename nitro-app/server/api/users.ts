// routes.ts
import { getUsers } from "~~/db-queries";

export default defineEventHandler(async (event) => {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch users' }
    };
  }
});
