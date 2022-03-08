const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routers/loginRouter");
const saveGameRouter = require('./routers/saveGameRouter')


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(
  "",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

app.use("/", express.static(path.join(__dirname, "../dist")));

app.use("/data/login", loginRouter);

app.use("/data/saveGame", saveGameRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});

module.exports = app;
