const bunyan = require('bunyan');
const { logConfig } = require('../config');

const logger = bunyan.createLogger({
  name: logConfig.loggerName,
  streams: [
    {
      level: logConfig.displayedLogLevel,
      stream: process.stdout
    }
    /* {
            level: 'error',
            path: `/var/log/${logConfig.loggerName}.log`
        } */
  ]
});

module.exports = logger;
