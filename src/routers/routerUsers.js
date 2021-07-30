const express = require('express');
// const rescue = require('express-rescue');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.create);

module.exports = router; 