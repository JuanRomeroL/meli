class App {
  constructor(server) {
    this.server = server;
  }

  init() {
    this.server.start();
  }
}

module.exports = App;
