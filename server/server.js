const path = require('path');
const express = require('express');
const router = require('./routers/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('!!!!!IS THIS WORKING!!!!!');
});

app.use('/login', router);

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});

module.exports = app;
