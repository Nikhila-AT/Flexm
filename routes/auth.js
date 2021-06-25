
const authService = require("../services/authService");

const validationMiddleware = require('../middleware/auth');
module.exports = (app) => {
  app.post("/login", authService.userLogin);
  app.post("/register", validationMiddleware.register, authService.userRegister); 
};
