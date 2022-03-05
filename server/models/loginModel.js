const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here

const userSchema = new Schema({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
});

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = mongoose.model('student', userSchema);