const user = require('../models/loginModels');


const triviaController = {};

triviaController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  user.Create({username: username, password: password})
    .then((response) => {
      res.locals.user = response;
      return next();
    })
    .catch((err) => {
      return ({
        log: 'Unable to create new database document',
        status: 400,
        message: {err: 'Could not create user!'},
      })
    })
}

triviaController.loginUser = (req, res, next) => {
  const { username, password } = req.body;
  user.findOne({username: username, password: password})
    .then((response) => {
      res.locals.user = response;
      return next();
    })
    .catch((err) => {
      return ({
        log: 'Unable to find new database document',
        status: 400,
        message: {err: 'Could not find user!'},
      })
    })
}

triviaController.test = (req, res, next) => {
  next();
}