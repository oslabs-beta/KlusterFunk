import jwt from 'jsonwebtoken';
import 'dotenv/config';
import base64 from 'base-64';

const tokenController = {};

/*
////   Create Token Controller   \\\\

Takes username from res.locals
  Generates JWT token with username and JWT_SECRET
  Assigns token to the response's HTTP-only cookie, labeled 'token'
  Saves new token to res.locals.token --> next();

*/

tokenController.createToken = async (req, res, next) => {
  const { username } = res.locals.user;
  const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: '12h',
  });
  res.cookie('token', token, { httpOnly: true });
  res.locals.token = token;
  return next();
};

/*
////   Verify Token Controller   \\\\

Takes token from req.cookies
  Splits token into segments [Header, Payload, Signature]
  Decodes the payload using Base64 and uses object destructuring to pull username
  Stores username in res.locals.username

*/

tokenController.verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const splitToken = token.split('.');
    const { username } = JSON.parse(base64.decode(splitToken[1]));
    res.locals.username = username;
  } else {
    return next({
      log: 'tokenController.verifyToken: ERROR: no token in req.cookies',
      message: { err: 'Unable to verify' },
      status: 401,
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded', decoded);
    return next();
  } catch (err) {
    return next({
      log: `Error in tokenController.verifyToken: ${err}`,
      status: 401,
      message: { err: 'Unable to verify' },
    });
  }
};

export default tokenController;
