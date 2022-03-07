const express = require('express');
const gameController = require('../controllers/saveGameController');

const app = express.Router();

app.post('/loadGame', gameController.loadGame, (req, res) => {
  console.log(res.locals.gameState);
  res.status(200).json(res.locals.gameState);
})

app.post('/', gameController.saveGame, (req, res) => {
  res.status(200).json(res.locals.gameState);
})


module.exports = app;