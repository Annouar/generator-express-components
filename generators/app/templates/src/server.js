const app = require('./app');
const { log } = require('./services/');
const { env, port, host } = require('./services/').serverConfig;
const { name, version } = require('./services/').appConfig;

// Start Node server
app.listen(port, host, () => {
  log.info(`${name} v${version} server is running on http://${host}:${port} in ${env} mode`);
});

// Handle Node app gracefully (shut down server, DB, caching)

/*
const handleExit = () => {};

process.on('exit', handleExit);
process.on('SIGTERM', handleExit);
process.on('SIGINT', handleExit);
process.on('uncaughtException', handleExit);
*/
