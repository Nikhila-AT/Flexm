
var jwt = require('jsonwebtoken');

var config = require('../config');
const tokenValidation = (req, res, next) => {
    try {
        console.log("token  ", req.headers.authorization);
    if(req.headers.authorization){
        let token = req.headers.authorization;
        
        let secret = jwt.verify(token, config.secret);
        if(secret.userId){
            req.userId = secret.userId;
          next();
        }
      } else {
          res.status(401).send("Unauthorized");
      }  
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
   
}

module.exports = { 
    tokenValidation
}