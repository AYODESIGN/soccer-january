// import mongoose module

const mongoose = require("mongoose");

// Create Match Schema
const matchSchema = mongoose.Schema({
  scoreOne: Number,
  scoreTwo: Number,
  teamOne: String,
  teamTwo: String
});

// Create Model Name "Match"
const match = mongoose.model("Match", matchSchema);

// Make Match Exportable
module.exports = match;
