import cors from 'cors';
import 'dotenv/config';
import express from 'express';

const app = express();

// This middleware allows our server to accept requests from different sources/origins
app.use(cors());
// Parses incoming requests as JSON
app.use(express.json());
// Parses form data in requests
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

// Route Setup
app.get('/api', (_req, res) => {
  res.status(200).json({ message: 'Hello from the server!' });
});

// Server Initialization
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
