const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

require('dotenv/config');

const CreateUserController = require('./controllers/CreateUserController');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const UserIdController = require('./controllers/UserIdController');
const ErrorsUser = require('./middlewares/ErrorsUser');
const ErrorsLogin = require('./middlewares/ErrorsLogin');
const ErrorsToken = require('./middlewares/ErrorsToken');
const Auth = require('./middlewares/Auth');
const ResponseErrors = require('./middlewares/ResponseErrors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', rescue(LoginController));
app.use(ErrorsLogin);
app.get('/user/:id', rescue(Auth), rescue(UserIdController));
app.get('/user', rescue(Auth), rescue(UserController));
app.post('/user', rescue(CreateUserController));
app.use(ErrorsToken, ErrorsUser);
app.use(ResponseErrors);

app.listen(PORT, () => console.log(`SERVER ONLINE IN ${PORT}!`));
