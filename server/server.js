import express from 'express'
import path from 'path'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ClusterFunk',
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

// import and use routes
import { userRouter } from './routes/userRouter.js';

app.use('/user', userRouter);
// unknown route handler
app.get('/*', (req, res) => {
  return res.status(404).send('Page not found');
});

// global error handler
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

export default app
