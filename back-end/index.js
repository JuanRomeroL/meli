const express = require("express");
const Express = require("./src/adapters/express");
const App = require("./src/app");

const server = new Express(3000, express());

const myApp = new App(server);
myApp.init();
