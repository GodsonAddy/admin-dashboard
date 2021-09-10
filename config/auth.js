const verifyToken = (req, res, next) => {
  const decoded = req.headers["authorization"];

  if (typeof decoded !== 'undefined') {
    const bearer = decoded.split('');
    const bearToken = bearer[1];
    req.token = bearToken;
    next()
  } else {
      res.sendStatus(403)
  }
  
};

module.exports = verifyToken;