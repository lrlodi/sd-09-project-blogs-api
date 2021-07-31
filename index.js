const express = require('express');
const bodyParser = require('body-parser');
const { routerUsers, routerLogin, routerCategories, routerPosts } = require('./src/routers');
const errorHandling = require('./src/middlewares/errorHandling');

const app = express();
app.use(bodyParser.json());

app.use('/user', routerUsers);
app.use('/login', routerLogin);
app.use('/categories', routerCategories);
app.use('/post', routerPosts);
app.use(errorHandling);
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
