import dns from 'node:dns';

dns.setServers(['8.8.8.8']);

import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';

import { errorHandler } from './middleware/errorHandler.js';

import { connectMongoDB } from './db/connectMongoDB.js';
import notesRouter from './routes/notesRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use(notesRouter);

app.use(notFoundHandler);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
