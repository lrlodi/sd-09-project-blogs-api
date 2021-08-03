const rescue = require('express-rescue');
const validate = require('../middlewares/validate');
const postsServices = require('../services/posts');
const response = require('../middlewares/responseCodes');

const createNew = [
  validate.authToken,
  validate.newPostInfo,
  validate.categoryExists,
  rescue(async (req, res) => {
    const { user } = req;
    const { title, content } = req.body;

    const newPost = await postsServices.createNew(title, content, user.id);
    return res.status(response.STATUS_CREATED).json(newPost);
})];

const getAll = [
  validate.authToken,
  rescue(async (req, res) => {
    const allPosts = await postsServices.getAll();
    return res.status(response.STATUS_OK).json(allPosts);
 })];

module.exports = {
  createNew,
  getAll,
}