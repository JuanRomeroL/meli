const Express = require("./src/adapters/express");
const App = require("./src/app");

const server = new Express(3001);

const myApp = new App(server);
myApp.init();
