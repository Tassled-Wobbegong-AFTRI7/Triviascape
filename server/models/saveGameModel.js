const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// schema for saving game state
// username is unique
const stateSchema = new Schema({
  page: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  category: {type: String, required: true},
  questionData: {type: Array, required: true},
  questionsAnswered: { type: Number, required: true },
  lives: { type: Number, required: true },
  points: {type: Number, required: true}
});

module.exports = mongoose.model('gameState', stateSchema);