import express from 'express';
import path from 'path';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRouter } from './routes/userRouter.js';
import { metricsRouter } from './routes/metricsRouter.js';

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ClusterFunk',
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

// Set up routers
app.use('/user', userRouter);
app.use('/metrics', metricsRouter);

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
