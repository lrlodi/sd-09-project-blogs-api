const tokenGenerator = require('./tokenGenerator');
const checkDisplayName = require('./checkDisplayName');
const checkEmail = require('./checkEmail');
const checkPassword = require('./checkPassword');
const checkIfUserAlreadyExist = require('./checkIfUserAlreadyExist');
const checkIfLoginIsValid = require('./checkIfLoginIsValid');

module.exports = { 
  tokenGenerator,
  checkDisplayName,
  checkEmail,
  checkPassword,
  checkIfUserAlreadyExist,
  checkIfLoginIsValid };