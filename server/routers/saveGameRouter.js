const express = require('express');
const gameController = require('../controllers/saveGameController');

const app = express.Router();


app.post('/', gameController.saveGame, (req, res) => {
  res.status(200).json(res.locals.gameState);
})

app.get('/', gameController.loadGame, (req, res) => {
  res.status(200).json(res.locals.gameState);
})