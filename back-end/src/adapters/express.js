const Product = require("../controllers/product");
const Server = require("../interfaces/server");
const express = require("express");
const cors = require("cors");
const validateGetProducts = require("../middlewares/validateGetProducts");
const validateGetProduct = require("../middlewares/validateGetProduct");

class Express extends Server {
  constructor(controllers, port) {
    super();
    this.port = port;
    this.controllers = controllers;
    this.app = express();
  }

  start() {
    this.app.use(cors());
    this.defineRoutes();

    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }

  defineRoutes() {
    const [productController] = this.controllers;

    this.app.get(
      "/api/items",
      validateGetProducts,
      productController.getProducts
    );

    this.app.get(
      "/api/items/:id",
      validateGetProduct,
      productController.getProduct
    );
  }
}

module.exports = Express;
