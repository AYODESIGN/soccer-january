// import mongoose module

const mongoose = require("mongoose");


// Create User Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  pwd: String,
  avatar: String
});

// Create Model Name "User"
const user = mongoose.model("User", userSchema);

// Make User Exportable
module.exports = user;

