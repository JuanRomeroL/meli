const Product = require("../controllers/product");
const Server = require("../interfaces/server");
const MeliApi = require("./meliApi");

class Express extends Server {
  constructor(port, expressInstance) {
    super();
    this.port = port;
    this.expressInstance = expressInstance;
  }

  start() {
    this.defineRoutes();

    this.expressInstance.listen(this.port, () => {
      console.log("Listening on port " + this.port);
    });
  }

  defineRoutes() {
    const meliApi = new MeliApi();
    const productController = new Product(meliApi);

    this.expressInstance.get("/api/items", productController.getProducts);
    this.expressInstance.get("/api/items/:id", productController.getProduct);
  }
}

module.exports = Express;
