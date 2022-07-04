const Product = require("../controllers/product");
const Server = require("../interfaces/server");
const MeliApi = require("./meliApi");
const express = require("express");
const cors = require("cors");

class Express extends Server {
  constructor(port) {
    super();
    this.port = port;
    this.app = express();
  }

  start() {
    this.app.use(cors());
    this.defineRoutes();

    this.app.listen(this.port, () => {
      console.log("Listening on port " + this.port);
    });
  }

  defineRoutes() {
    const dataAccess = new MeliApi();
    const productController = new Product(dataAccess);

    this.app.get("/api/items", productController.getProducts);
    this.app.get("/api/items/:id", productController.getProduct);
  }
}

module.exports = Express;
