const express = require('express');
const gameController = require('../controllers/saveGameController');

const app = express.Router();

function testController() {
  console.log('router reached')
}


app.post('/loadGame', gameController.loadGame, (req, res) => {
  res.status(200).json(res.locals.gameState);
})


app.post('/', gameController.saveGame, (req, res) => {
  res.status(200).json(res.locals.gameState);
})


module.exports = app;