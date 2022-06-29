const App = require("./src/app");
const Express = require("./src/express");

const server = new Express(3000);
const myApp = new App(server);
myApp.init();
