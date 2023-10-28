import jwt from 'jsonwebtoken'
import 'dotenv/config'

const tokenController = {};

tokenController.createToken = async (req, res, next) => {
  const { username } = res.locals.user;
  const token = jwt.sign({username: username}, process.env.JWT_SECRET, {expiresIn: '12h'});
  res.cookie('token', token, {httpOnly: true});
  return next();
}

tokenController.verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  try {
    jwt.verify(token, process.env.JWT_SECRET)
    return next()
  } catch (err) {
    return next({
      log: 'Error in tokenController.verifyToken',
      status: 401,
      message: { err: 'Not authorized' }
    })
  }
}

export default tokenController;