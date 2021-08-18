const Post = require('../services/post');

const statusHTTP = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
};

// Rotas
const create = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const posts = await Post.create(authorization, req.body);

    return res.status(statusHTTP.CREATED).json(posts);
  } catch (error) {
    return next(error);
  }
};

const list = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'listar posts' });
  } catch (error) {
    next(error);
  }
};

const listById = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'listar post por id' });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'editar post' });
  } catch (error) {
    next(error);
  }
};

const exclude = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'excluir post' });
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'procurar post por termo' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  list,
  listById,
  edit,
  exclude,
  search,
};
