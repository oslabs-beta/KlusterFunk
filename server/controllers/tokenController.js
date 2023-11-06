import jwt from 'jsonwebtoken'
import 'dotenv/config'
import base64 from 'base-64'

const tokenController = {};

tokenController.createToken = async (req, res, next) => {
  const { username } = res.locals.user;
  const token = jwt.sign({username: username}, process.env.JWT_SECRET, {expiresIn: '12h'});
  res.cookie('token', token, {httpOnly: true});
  res.locals.token = token;
  return next();
}

tokenController.verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  const splitToken = token.split('.');
  const { username } = JSON.parse(base64.decode(splitToken[1]));
  res.locals.username = username
  
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