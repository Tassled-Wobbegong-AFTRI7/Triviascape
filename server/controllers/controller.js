const user = require('../models/loginModel');


const triviaController = {};

triviaController.createUser = (req, res, next) => {
  console.log(req.body)
  const { username, password } = req.body;
  console.log(username)
  console.log(password)
  user.create({ username: username, password: password })
    .then((response) => {
      res.locals.user = response;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Unable to create new database document',
        status: 400,
        message: {err: 'Could not create user!'},
      })
    })
}

triviaController.loginUser = (req, res, next) => {
  console.log(req.body)
  const { username, password } = req.body;
  user.findOne({username: username, password: password})
    .then((response) => {
      res.locals.user = response;
      console.log(response)
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Unable to find new database document',
        status: 400,
        message: {err: 'Could not find user!'},
      })
    })
}

triviaController.test = (req, res, next) => {
  next();
}

module.exports = triviaController;