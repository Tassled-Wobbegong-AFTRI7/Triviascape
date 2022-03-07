const game = require('../models/saveGameModel');
// const { response } = require('../server');

const gameController = {};

gameController.saveGame = (req, res, next) => {
  const { page, username, category, questionData, questionsAnswered } = req.body;
  game.create({ page: page, username: username, category: category, questionData: questionData, questionsAnswered: questionsAnswered })
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
  const { page, username, category, questionData, questionsAnswered } = req.body;
  game.findOne({ page:page, username:username, category:category, questionData:questionData, questionsAnswered:questionsAnswered })
    .then((response) => {
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