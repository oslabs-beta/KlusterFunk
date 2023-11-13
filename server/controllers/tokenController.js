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
  If no token in req.cookies, throws error
Decodes the JWT using the token and the secret
  Deconstructs the username from the decoded token
  Stored in res.locals.username

*/

tokenController.verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  // Throws error if no token in cookies
  if (!token) {
    return next({
      log: 'tokenController.verifyToken: ERROR: no token in req.cookies',
      message: { err: 'Unable to verify' },
      status: 401,
    });
  }
  try {
    // Decodes JWT token, pulls username and stores it in res.locals.
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const { username } = decoded;
    res.locals.username = username;
    return next();
  } catch (err) {
    return next({
      log: `tokenController.verifyToken: ERROR: ${err}`,
      status: 401,
      message: { err: 'Unable to verify' },
    });
  }
};

tokenController.deleteToken = async (req, res, next) => {
  const { token } = req.cookies;
  console.log('in delete token')
  if (!token) {
    return next({
      log: 'tokenController.verifyToken: ERROR: no token in req.cookies',
      message: { err: 'Unable to verify' },
      status: 401,
    });
  }
  res.clearCookie('token');
  return next();
}

export default tokenController;

/*

/// Code Storehouse \\\

Putting some old code here not ready to delete, DON'T PUSH THIS TO MAIN


David's approach on decoding the JWT token:
Takes token from req.cookies
  Splits token into segments [Header, Payload, Signature]
  Decodes the payload using Base64 and uses object destructuring to pull username
  Stores username in res.locals.username


tokenController.verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  // if (token) {
  //   const splitToken = token.split('.');
  //   const { username } = JSON.parse(base64.decode(splitToken[1]));
  //   res.locals.username = username;
  // }


*/
