let User = require("../models/user.model");
let uuid = require("uuid");
var bcrypt = require('bcryptjs');
var config = require('../config');
var jwt = require('jsonwebtoken');

module.exports = {
  userRegister: async (req, res) => {
    try {
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);
      let user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userType: req.body.userType,
        password: hashedPassword,
        email: req.body.email,
        userId: uuid.v4(),
      };

      let record = await User(user).save();
      
      res.json({
        status:"Success",
        message: "User Registered"
      });
      console.log("user  ", user);
    } catch (error) {
      console.log(error);
    }
  },
  userLogin: async (req, res) => {
    try {
      
      let record = await User.findOne({ username: req.body.username });
      if(!record){
        res.json({
          message: "Invalid username and password" });
      } 
      var checkpaswd = bcrypt.compareSync(req.body.password, record.password);
        if (!checkpaswd){
          res.json({
            message: "Invalid user and password" });
        } 
        
      var token = jwt.sign({ userId: record.userId }, config.secret, {
        expiresIn: 180 //86400 expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token, userId: record.userId });
      
    } catch (error) {
      console.log(error);
    }
  },

};
