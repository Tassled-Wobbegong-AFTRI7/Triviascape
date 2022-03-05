const { user } = require("pg/lib/defaults");


const triviaController = {};

const dummyObject = { username: 'test1', password: 'test2' };

triviaController.createUser(req, res, next) {
  const { userName, passWord } = req.body;
  user.Create({userName: userName, passWord: passWord})
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

triviaController.loginUser(req, res, next) {
  const { userName, passWord } = req.body;
  user.findOne({userName: userName, passWord: passWord})
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