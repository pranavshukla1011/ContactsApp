const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No token found',
    });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    console.log('Token Verification Complete');
    next();
  } catch (err) {
    console.log(err.message);
    res.status(403).json({
      msg: 'Invalid token....forbidden',
    });
  }
};
