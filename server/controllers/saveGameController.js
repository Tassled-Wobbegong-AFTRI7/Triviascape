const game = require('../models/saveGameModel');
// const { response } = require('../server');

const gameController = {};

gameController.saveGame = (req, res, next) => {
  // console.log(req.body)
  const { page, username, category, questionData, questionsAnswered, lives, points } = req.body;
  game.create({ page: page, username: username, category: category, questionData: questionData, questionsAnswered: questionsAnswered, lives: lives, points: points })
    .then((response) => {
      res.locals.gameState = response;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Unable to save game state',
        status: 400,
        message: {err: 'Could not save game!'},
      })
    })
}


gameController.loadGame = (req, res, next) => {
  const { username } = req.body;
  game.findOne({ username: username })
    .then((response) => {
      console.log(response)
      res.locals.gameState = response;
      return next;
    })
    .catch((err) => {
      return next({
        log: 'Unable to find matching game data',
        status: 400,
        message: {err: 'Could not find game data!'},
      })
    })
}

module.exports = gameController;