const EnvConfig = require("../interfaces/envConfig");

class DotEnv extends EnvConfig {
  getConfig() {
    require("dotenv").config();
  }
}

module.exports = DotEnv;
