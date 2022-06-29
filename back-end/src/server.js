const 

class Server {
  constructor(port) {
    this.port = port;
  }
  initApp() {
    console.log("Server listening on" + this.port);
  }
}

module.exports = Server;
