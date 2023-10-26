import express from 'express';
import userController from '../controllers/userController.js';
import tokenController from '../controllers/tokenController.js';
const router = express.Router();

router.post('/signup', userController.signup, (req, res) => {
  return res.status(201).json({ message: 'Registration successful' });
})

router.post('/login', userController.login, (req, res) => {
  return res.status(202).json({ message: 'Login successul'});
})

export {router as userRouter};