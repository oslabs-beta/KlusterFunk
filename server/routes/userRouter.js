import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.post('user/signup', userController.signup, (req, res) => {
  return res.status(201).json({ message: 'Registration successful' });
})

router.post('user/login', userController.login, (req, res) => {
  return res.status(202).json({ message: 'Login successul'});
})

export {router as userRouter};