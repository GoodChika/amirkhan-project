const config = require("./config");

function createLogger(appName = config.appName) {
  return function logger(message) {
    console.log(`[${appName}] ${message}`);
  };
}

module.exports = createLogger;