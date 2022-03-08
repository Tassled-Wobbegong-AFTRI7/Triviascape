const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// schema for creating user to login with
// username is unique
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


module.exports = mongoose.model("user", userSchema);
