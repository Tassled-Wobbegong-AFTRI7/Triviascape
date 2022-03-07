const game = require('../models/saveGameModel');

const gameController = {};

gameController.saveGame = async (req, res, next) => {
  console.log('from saveGame1')
  // console.log(req.body.lives)
  const { page, username, category, questionData, questionsAnswered, lives, points } = req.body;
  const result = await game.findOneAndUpdate({username: username}, { page: page, username: username, category: category, questionData: questionData, questionsAnswered: questionsAnswered, lives: lives, points: points })
  res.locals.gameState = result;
  if(result === null) {
    game.create({ page: page, username: username, category: category, questionData: questionData, questionsAnswered: questionsAnswered, lives: lives, points: points })
    .then((response) => {
      console.log('Created from saved Game',response);
      res.locals.gameState = response;
      return next();
    })
    .catch((err) => {
      console.log(err, "Im IN THE ERROR")
      return next({
        log: 'Unable to save game state',
        status: 400,
        message: {err: 'Could not save game!'},
      })
    })
  }
   return next();
}


gameController.loadGame = (req, res, next) => {
  console.log('from loadgame')
  const { username } = req.body;
  console.log('logged from gameController.loadGame:', username )
  game.findOne({ username: username })
    .then((response) => {
      console.log(response, "LOAD GAME OBJECT")
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