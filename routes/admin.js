
const productService = require("../services/productService");

const validationMiddleware = require('../middleware/admin');
const tokenMiddleware = require('../middleware/tokenValidation');
module.exports = (app) => {
  app.post("/addProduct", tokenMiddleware.tokenValidation, validationMiddleware.addProduct, productService.addProduct);
  app.get("/listProducts", tokenMiddleware.tokenValidation, productService.listProducts);
  app.post("/editProduct", tokenMiddleware.tokenValidation, productService.editProduct);
  app.post("/deleteProduct",tokenMiddleware.tokenValidation, productService.deleteProduct);
};
