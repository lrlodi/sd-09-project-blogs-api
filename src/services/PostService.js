const { BlogPost, User, Category, PostsCategory } = require('../models');

const createPost = async (userId, title, content) => {
  const post = await BlogPost.create({ userId, title, content })
    .then((newPost) => newPost.dataValues)
    .catch((error) => error);

  return post;
};

const CreatePostCategory = async (categoryIds, postId) => {
  categoryIds.forEach((categoryId) => {
     PostsCategory.create({ categoryId, postId });
  });
};

const getPostsAll = async () => {
  const post = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { excludes: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return post;
};

const getPostsById = async (id) => {
  const postById = await BlogPost.findByPk((id), {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { excludes: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return postById;
};

const updatePost = async (userId, title, content) => {
  const post = await BlogPost.create({ userId, title, content })
    .then((postUpdate) => postUpdate.dataValues)
    .catch((error) => error);

  return post;
};

  module.exports = { 
  createPost,
  getPostsAll,
  getPostsById,
  CreatePostCategory,
  updatePost,
};