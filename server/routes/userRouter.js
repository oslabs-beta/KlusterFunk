import express from 'express';
import userController from '../controllers/userController.js';
import tokenController from '../controllers/tokenController.js';

const router = express.Router();

router.post(
  '/signup',
  userController.signup,
  tokenController.createToken,
  (req, res) => {
    return res.status(201).json({ message: 'registration successful' });
  }
);

router.post(
  '/login',
  userController.login,
  tokenController.createToken,
  (req, res) => {
    return res.status(202).json({ message: 'login successul' });
  }
);

router.get('/auth', tokenController.verifyToken, (req, res) => {
  return res.status(202).json({ username: res.locals.username });
});

export { router as userRouter };
