const createLogger = require("./logger");

const log = createLogger();

log("scheduler.js started");

function scheduleTask(name, interval, task) {
  log(`task "${name}" scheduled every ${interval}ms`);

  return setInterval(() => {
    task();
  }, interval);
}

scheduleTask("heartbeat", 10000, () => {
  log("running");
});

module.exports = {
  scheduleTask,
};
