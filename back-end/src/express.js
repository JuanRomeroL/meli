const express = require("express");
const Server = require("./interfaces/server");

class Express extends Server {
  instance = express();

  constructor(port) {
    super();
    this.port = port;
  }

  start() {
    this.defineRoutes();

    this.instance.listen(this.port, () => {
      console.log("Listening on port " + this.port);
    });
  }

  defineRoutes() {
    this.instance.get("/api/items", (req, res) => {
      res
        .status(200)
        .json({ message: "get products", queryParams: { ...req.query } });
    });

    this.instance.get("/api/items/:id", (req, res) => {
      res
        .status(200)
        .json({ message: "get product detail", params: { ...req.params } });
    });
  }
}

module.exports = Express;
