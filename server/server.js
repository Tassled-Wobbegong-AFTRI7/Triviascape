const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const loginRouter = require('./routers/loginRouter');
const saveGameRouter = require('./routers/saveGameRouter');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD YOUR DATABASE CONNECTION HERE
mongoose.connect({ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use('/', express.static(path.join(__dirname, '../dist')));

// routers for logging in and saving/loading games
app.use('/data/login', loginRouter);
app.use('/data/saveGame', saveGameRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});

module.exports = app;
