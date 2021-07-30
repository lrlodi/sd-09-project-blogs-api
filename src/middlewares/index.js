const errorHandler = require('./errorHandler');
const validateUser = require('./validateUser');
const validateLogin = require('./validateLogin');
const validateToken = require('./validateToken');
const validateCategory = require('./validateCategory');
const validatePost = require('./validatePost');
const validateUpdatePost = require('./validateUpdatePost');

module.exports = {
  errorHandler,
  validateUser,
  validateLogin,
  validateToken,
  validateCategory,
  validatePost,
  validateUpdatePost,
};