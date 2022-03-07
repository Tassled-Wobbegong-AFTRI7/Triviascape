<<<<<<< HEAD
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const loginRouter = require('./routers/loginRouter');
const googleRouter = require('./routers/googleRouter');
=======
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routers/loginRouter");
const saveGameRouter = require('./routers/saveGameRouter')


>>>>>>> 00578f3600cce31b222fd66e571b38d500995b6b
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD

=======
>>>>>>> 00578f3600cce31b222fd66e571b38d500995b6b


mongoose.connect(
  "mongodb+srv://scratch-project:dg8PH0oE2bAwgKEr@cluster0.npof1.mongodb.net/scratch-projectDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

app.use("/", express.static(path.join(__dirname, "../dist")));

<<<<<<< HEAD
app.use('/data/login', loginRouter);
app.use('/data/oauth', googleRouter);
=======
app.use("/data/login", loginRouter);

app.use("/data/saveGame", saveGameRouter);
>>>>>>> 00578f3600cce31b222fd66e571b38d500995b6b

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});

module.exports = app;
