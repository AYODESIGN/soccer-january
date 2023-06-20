// import mongoose module

const mongoose = require("mongoose");

// Create Team Schema
const teamSchema = mongoose.Schema({
  teamName: String,
  teamStadium: String,
  teamOwner: String,

});

// Create Model Name "Team"
const team = mongoose.model("Team", teamSchema);

// Make Team Exportable
module.exports = team;
