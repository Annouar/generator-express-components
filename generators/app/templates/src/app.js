const restify = require('restify');
const morganLogger = require('restify-logger');
const { log, logConfig, appConfig } = require('./services');
const { myComponentRouter } = require('./api');

// HTTP Server
const app = restify.createServer({
  name: appConfig.name,
  version: appConfig.version,
  log
});

// HTTP Server middlewares
app.use(restify.plugins.bodyParser({ mapParams: true }));
app.use(restify.plugins.acceptParser(app.acceptable));
app.use(morganLogger(logConfig.morganLogLevel));

// Server routes & routers
app.get('/api/health', (req, res, next) => {
  res.json({ status: 'ON' });
  next();
});

myComponentRouter.applyRoutes(app);

module.exports = app;
