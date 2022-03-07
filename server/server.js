const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routers/loginRouter");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongodb+srv://lmendezjr024:<password>@cluster0.npof1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
  "mongodb+srv://scratch-project:dg8PH0oE2bAwgKEr@cluster0.npof1.mongodb.net/scratch-projectDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

app.use("/", express.static(path.join(__dirname, "../dist")));

app.use("/data/login", loginRouter);

app.use("/data/saveGame", (req, res) => {
  console.log("im here");
});

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});

module.exports = app;
