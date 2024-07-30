//https://nitro.unjs.io/config
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

export default defineNitroConfig({
  srcDir: "server",
  experimental: {
    database: true,
  },
  runtimeConfig: {
    database: {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    },
    // public: {
    //   apiBase: '/api',
    // }
  },
});
