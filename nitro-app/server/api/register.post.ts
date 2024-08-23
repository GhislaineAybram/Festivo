// routes.ts
import { createUser } from "~~/db-queries";

export default eventHandler(async (event) => {
  const { firstname, lastname, email, password } = await readBody(event);

  if (!firstname || !lastname || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "All fields are required.",
    });
  };

  await createUser(
    firstname, 
    lastname, 
    email, 
    password
  );
  return {
    message: "Successfully registered!",
  };
});
