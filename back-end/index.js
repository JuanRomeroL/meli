const Express = require("./src/adapters/express");
const DotEnv = require("./src/adapters/dotEnv");
const App = require("./src/app");
const MeliApi = require("./src/adapters/meliApi");
const Product = require("./src/controllers/product");

const environment = new DotEnv();
environment.getConfig();

const { PORT } = process.env;
const dataAccess = new MeliApi();
const product = new Product(dataAccess);
const server = new Express([product], PORT);

const myApp = new App(server);
myApp.init();
