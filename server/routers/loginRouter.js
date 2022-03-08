const express = require("express");
const triviaController = require("../controllers/loginController");

const app = express.Router();

app.get("/", (req, res) => {
  res.status(200).json(res.body);
});

// post request to create new user -> info carried in req.body
app.post("/createUser", triviaController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

// post request to log into existing user -> info carried in req.body
app.post("/", triviaController.loginUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

// global error handler -> needs to be in server.js
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;
