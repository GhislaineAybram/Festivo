import client from "./db";

export const getUsers = async () => {
    const result = await client.query(`
      SELECT * 
      FROM postgres.public.user
      `);
    return result.rows
};

export const getUserById = async (id: number) => {
    const result = await client.query(`
      SELECT * 
      FROM public.user 
      WHERE id = $1
      `, [id]);
    return result.rows[0];
};

export const createUser = async (
  firstname: string, 
  lastname: string, 
  email: string, 
  password: string
) => {
  const result = await client.query(`
    INSERT INTO public.user (firstname, lastname, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
    [firstname, lastname, email, password]
  );
  return result.rows[0]; // Retourne l'utilisateur nouvellement créé
};

export const getCelebrations = async () => {
  const result = await client.query(`
    SELECT * 
    FROM postgres.public.event
    `);
  return result.rows
};

export const getCelebrationById = async (id: number) => {
  const result = await client.query(`
    SELECT * 
    FROM public.event
    WHERE id = $1
    `, [id]);
  return result.rows[0];
};