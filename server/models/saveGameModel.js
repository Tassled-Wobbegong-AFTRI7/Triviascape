const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const stateSchema = new Schema({
  page: {type: String, required: true},
  username: {type: String, required: true},
  category: {type: String, required: true},
  questionData: {type: String, required: true},
  questionsAnswered: {type: Number, required: true}
});

module.exports = mongoose.model('state', stateSchema);