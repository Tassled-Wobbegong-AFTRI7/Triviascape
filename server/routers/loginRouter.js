const express = require("express");
const triviaController = require("../controllers/controller");

const app = express.Router();

app.get("/", (req, res) => {
  res.status(200).json(res.body);
});

app.post("/createUser", triviaController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

app.post("/", triviaController.loginUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

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
