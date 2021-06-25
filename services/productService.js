let Product = require("../models/product.model");
let uuid = require("uuid");
module.exports = {
  // add product
  addProduct: async (req, res) => {
    try {
      let product = {
        userId: req.userId,
        productName: req.body.productName,
        brand: req.body.brand,
        color: req.body.color,
        quantity: req.body.quantity,
        price: req.body.price,
        productId: uuid.v4(),
      };
      await Product(product).save();
      console.log("product  ", product);
      res.json({
        status: "success",
        message: "Product Added",
      });
    } catch (error) {
      console.log(error);
    }
  },
  // list all products
  listProducts: async (req, res) => {
    try {
      let record = await Product.find({});
      console.log("record   ", record);
      res.json(record);
    } catch (error) {
      console.log(error);
    }
  },
  // edit product
  editProduct: async (req, res) => {
    try {
      let query = { productId: req.body.productId };
      let record = await Product.findOneAndUpdate(query, {
         $set: {
          quantity: req.body.quantity,
          brand: req.body.brand,
          color: req.body.color,
          price: req.body.price
         }
      }, { new: true, upsert: true });
      res.json(record);
    } catch (error) {
      throw error;
    }
  },
  // delete single product using productid
  deleteProduct: async(req,res) => {
    try {
      let query = { productId: req.body.productId };
      console.log(query);
      let record = await Product.deleteOne(query);
      console.log(record);
      res.json({
        status: "success",
        message: "product deleted",
      });
    } catch (error) {
      throw error;
    }
  }
};
