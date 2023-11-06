import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const userController = {};

userController.login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'Missing username or password in userController.createUser',
      status: 400,
      message: { err: 'username and password required' },
    });
  }
  try {
    const user = await User.findOne({ username: username });
    // console.log(user)
    if (!user) {
      return next({
        log: 'invalid username in userController.login',
        status: 401,
        message: { err: 'Invalid username or password' },
      });
    } else {
      try {
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
          return next({
            log: 'invalid password in userController.login',
            status: 401,
            message: { err: 'Invalid username or password' },
          });
        } else {
          res.locals.user = user
          return next();
        }
      } catch (err) {
        return next({
          log: 'Error in userController.login',
          message: { err: 'Error logging in' },
        });
      }
    }
  } catch (err) {
    return next({
      log: 'Error in userController.login',
      message: { err: 'Something went wrong! Whoops!' },
    });
  }
};

userController.signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body)
    if (!username || !password) {
      return next({
        log: 'Missing username or password in userController.signup',
        status: 400,
        message: { err: 'username and password required' },
      });
    }
    const findUser = await User.findOne({ username: username });
    if (findUser) {
      return next({
        log: 'Error in userController.signup, username already exists',
        status: 400,
        message: { err: 'Username is taken' },
      });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username: username,
      password: hashedPassword,
    });
    console.log('user from signup', user);
    res.locals.user = user;
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.signup, unable to complete sign up',
      message: { err: 'Something went wrong! Whoops!' },
    });
  }
}



export default userController