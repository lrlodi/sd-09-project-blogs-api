const express = require('express');
const userController = require('../controllers/userControllers');
const loginController = require('../controllers/loginControllers');
const categoryController = require('../controllers/categoryControllers');
const postController = require('../controllers/postControllers');

const middlewares = require('../middlewares');
// Rotas de /user
const userRouter = express.Router();
// 1 - Sua aplicação deve ter o endpoint POST /user
userRouter.post('/', middlewares.validateUser, userController.postNewUser);

// 3 - Sua aplicação deve ter o endpoint GET /user
userRouter.get('/', middlewares.validateToken, userController.getAllUsers);

// 4 - Sua aplicação deve ter o endpoint GET /user/:id
userRouter.get('/:id', middlewares.validateToken, userController.getUserById);

// 12 - Sua aplicação deve ter o endpoint DELETE /user/me
userRouter.delete('/me', middlewares.validateToken, userController.deleteMe);

// Rotas de /login
const loginRouter = express.Router();
// 2 - Sua aplicação deve ter o endpoint POST /login
loginRouter.post('/', middlewares.validateLogin, loginController.loginUser);

// Rotas de /categories
const categoriesRouter = express.Router();
// 5 - Sua aplicação deve ter o endpoint POST /categories
categoriesRouter.post('/', middlewares.validateToken,
  middlewares.validateCategory, categoryController.postCategory);

// 6 - Sua aplicação deve ter o endpoint GET /categories
categoriesRouter.get('/', middlewares.validateToken, categoryController.getAllCategories);

// Rotas de /post
const postRouter = express.Router();
// 7 - Sua aplicação deve ter o endpoint POST /post
postRouter.post('/', middlewares.validateToken,
  middlewares.validatePost, postController.postNewPost);

// 8 - Sua aplicação deve ter o endpoint GET /post
postRouter.get('/', middlewares.validateToken, postController.getAllPosts);

// 13 - Sua aplicação deve ter o endpoint GET post/search?q=:searchTerm
postRouter.get('/search', middlewares.validateToken, postController.searchPost);

// 9 - Sua aplicação deve ter o endpoint GET post/:id
postRouter.get('/:id', middlewares.validateToken, postController.getPostByPostId);

// 10 - Sua aplicação deve ter o endpoint PUT /post/:id
postRouter.put('/:id', middlewares.validateToken,
middlewares.validateUpdatePost, postController.updatePost);

// 11 - Sua aplicação deve ter o endpoint DELETE post/:id
postRouter.delete('/:id', middlewares.validateToken, postController.deletePost);

module.exports = {
  userRouter,
  loginRouter,
  categoriesRouter,
  postRouter,
};