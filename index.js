const express = require('express');
const userController = require('./controllers/user');
const userServices = require('./services/user');
const categoriesController = require('./controllers/categories');
const categoriesServices = require('./services/categories');
const { validateToken } = require('./services/validate');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// Users

app.post('/user',
userServices.validateEmail,
userServices.validateName,
userServices.validatePassword,
userController.insertUser);
app.post('/login',
userServices.validateLoginEmail,
userServices.validateLoginPassword,
userController.logUser);

app.get('/user',
validateToken,
userController.listAllUsers);
app.get('/user/:id',
validateToken,
userController.getUserById);

// Categories

app.post('/categories',
validateToken,
categoriesServices.validateName,
categoriesController.insertCategory);

app.get('/categories',
validateToken,
categoriesController.listAllCategories);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use((error, _req, res, _next) => {
  console.log(error);
  res.status(error).json({ message: error.message });
});
