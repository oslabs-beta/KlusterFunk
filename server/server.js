import express from 'express';
import path from 'path';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRouter } from './routes/userRouter.js';
import { metricsRouter } from './routes/metricsRouter.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3030;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, '../dist')));

// Connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'KlusterFunk',
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

// Set up routers
app.use('/user', userRouter);
app.use('/metrics', metricsRouter);

// if (process.env.NODE_ENV === 'production') {
// }

app.use('/', (req, res, next) => {
  return res.sendFile(join(__dirname, '../dist/index.html'));
});

// Unknown route handler
app.get('/*', (req, res) => {
  return res.status(404).send('Page not found');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
