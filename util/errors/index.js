const EmailAlreadyExist = require('./EmailAlreadyExist');
const JoiError = require('./JoiError');
const InvalidCredentials = require('./InvalidCredentials');
const MissingToken = require('./MissingToken');
const InvalidToken = require('./InvalidToken');
const ContentNotFound = require('./ContentNotFound');
const CategoryIdNotFound = require('./CategoryIdNotFound');

module.exports = {
  EmailAlreadyExist,
  JoiError,
  InvalidCredentials,
  MissingToken,
  InvalidToken,
  ContentNotFound,
  CategoryIdNotFound,
};