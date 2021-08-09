const postService = require('../services/postService');

const CREATED = 201;
const OK = 200;

const createPost = async (req, res) => {
  const newPost = req.body;
  const { id: userId } = req.user;
  const blogPost = await postService.createPost(newPost, userId);
  return res.status(CREATED).json(blogPost);
};

const getAllPosts = async (_req, res) => {
  const blogPosts = await postService.getAllPosts();
  return res.status(OK).json(blogPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await postService.getPostById(id);
  return res.status(OK).json(blogPost);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};