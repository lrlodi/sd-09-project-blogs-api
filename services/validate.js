const jwt = require('jsonwebtoken');
const { SECRET } = require('../controllers/user');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
        const email = jwt.verify(token, SECRET);
        req.email = email;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
  validateToken,
};
