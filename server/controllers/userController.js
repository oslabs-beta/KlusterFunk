import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const userController = {};

/*
////   Login Controller   \\\\

Takes username and password from req.body.
  Checks to see if username exists in MongoDB
  Checks password against Bcrypt hash.
  If both checks pass: stores user object to res.locals -> next();

*/
userController.login = async (req, res, next) => {
  const { username, password } = req.body;
  // Confirms req.body includes username and password
  if (!username || !password) {
    return next({
      log: 'Error in userController.createUser: missing username or password',
      status: 400,
      message: { err: 'Username and password required' },
    });
  }
  try {
    // Searches MongoDB for user document with matching username
    const user = await User.findOne({ username: username });
    if (!user) {
      return next({
        log: 'Error in userController.login: unable to find user in database',
        status: 401,
        message: { err: 'Invalid username or password' },
      });
    }
    // Compares req.body password with the User document's password (returns boolean)
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return next({
        log: 'Error in userController.login: invalid password',
        status: 401,
        message: { err: 'Invalid username or password' },
      });
    } else {
      // Stores user object to res.locals.user
      res.locals.user = user;
      return next();
    }
  } catch (err) {
    return next({
      log: `${err}: Error in userController.login`,
      message: { err: 'Something went wrong! Whoops!' },
      status: 500,
    });
  }
};

/*
////   Signup Controller   \\\\

Takes username and password from req.body.
  Checks to see if username is available by seeing if it alread exists in MongoDB
  Hashes password using Bcrypt
  Creates new user in MongoDB using username and hashed password
  Saves new user object to res.locals.user --> next();

*/

userController.signup = async (req, res, next) => {
  const { username, password } = req.body;
  // Confirms req.body includes username and password
  if (!username || !password) {
    return next({
      log: 'Error in userController.signup: missing username or password',
      status: 400,
      message: { err: 'username and password required' },
    });
  }

  try {
    // Checks to see if username is available:
    const findUser = await User.findOne({ username: username });
    if (findUser) {
      return next({
        log: 'Error in userController.signup: username already exists',
        status: 400,
        message: { err: 'Username is taken' },
      });
    }
    // Hashes password using Bcrypt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    // Saves new user object to res.locals.user
    res.locals.user = user;
    return next();
  } catch (err) {
    return next({
      log: `userController.signup: ERROR: ${err}`,
      message: { err: 'Something went wrong! Whoops!' },
    });
  }
};

export default userController;
