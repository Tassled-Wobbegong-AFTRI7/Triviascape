const game = require('../models/saveGameModel');

const gameController = {};

// middleware function to save game to db
gameController.saveGame = async (req, res, next) => {
  console.log('from saveGame1')
  // console.log(req.body.lives)
  const { page, username, category, questionData, questionsAnswered, lives, points } = req.body;
  // we use async await here to wait for the evaluated result of findOneAndUpdate to check if it is null
  const result = await game.findOneAndUpdate({username: username}, { page: page, username: username, category: category, questionData: questionData, questionsAnswered: questionsAnswered, lives: lives, points: points })
  res.locals.gameState = result;
  // if result is null, this means that the game state with the specified username does not exist in db
  // the following will create a new entry in the db
  if(result === null) {
    game.create({ page: page, username: username, category: category, questionData: questionData, questionsAnswered: questionsAnswered, lives: lives, points: points })
    .then((response) => {
      console.log('Created from saved Game',response);
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
   return next();
}

// middleware function to load game by finding if user state exists in db
// sends back game state associated with user
gameController.loadGame = (req, res, next) => {
  const { username } = req.body;
  game.findOne({ username: username })
    .then((response) => {
      res.locals.gameState = response;
      return next();
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