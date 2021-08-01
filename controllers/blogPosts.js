const rescue = require('express-rescue');
const { blogPostsService } = require('../services');

const { code: { CREATED } } = require('../utils');

const createPost = rescue(async (req, res) => {
  const { title, content } = req.body;
  const { id: userId } = req.user.dataValues;
  const post = await blogPostsService.createPost({ title, content, userId });

  return res.status(CREATED).json(post);
});

module.exports = {
  createPost,
};
