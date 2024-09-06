export default defineEventHandler(async (event) => {
    const session = await getUserSession(event);
    await clearUserSession(event);
    return {
      message: "Successfully logged out!",
    };
  });