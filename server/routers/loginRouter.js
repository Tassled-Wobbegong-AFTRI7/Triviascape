const express = require('express');
const triviaController = require('../controllers/controller');

const app = express.Router();

app.get('/', (req, res) => {
  res.status(200).json(res.body);
});

app.post('/createUser', triviaController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

app.post('/', triviaController.loginUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = app;
