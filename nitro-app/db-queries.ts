import client from "./db";

export const getUsers = async () => {
    const result = await client.query('SELECT * FROM postgres.public.user')
    return result.rows
};

export const getUserById = async (id: number) => {
    const result = await client.query('SELECT * FROM public.user WHERE id = $1', [id]);
    return result.rows[0];
};

export const getCelebrations = async () => {
  const result = await client.query('SELECT * FROM postgres.public.event')
  return result.rows
};

export const getCelebrationById = async (id: number) => {
  const result = await client.query('SELECT * FROM public.event WHERE id = $1', [id]);
  return result.rows[0];
};