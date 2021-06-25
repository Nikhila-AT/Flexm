const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    firstName: String,    
    lastName: String,
    userType: String,
    email: String,     
    password: String,
    username: String,
    userId: String
  });

  module.exports = mongoose.model("User", userSchema);