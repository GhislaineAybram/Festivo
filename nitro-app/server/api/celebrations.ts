// routes.ts
import { getCelebrations } from "~~/db-queries";

export default defineEventHandler(async (event) => {
  try {
    const events = await getCelebrations();
    return events;
  } catch (error) {
    return {
      statusCode: 500,
      body: { error: 'Failed to fetch events' }
    };
  }
});
