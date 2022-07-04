const Express = require("./src/adapters/express");
const DotEnv = require("./src/adapters/dotEnv");
const App = require("./src/app");
const MeliApi = require("./src/adapters/meliApi");

const environment = new DotEnv();
environment.getConfig();

const { PORT } = process.env;
const dataAccess = new MeliApi();
const server = new Express(dataAccess, PORT);

const myApp = new App(server);
myApp.init();
