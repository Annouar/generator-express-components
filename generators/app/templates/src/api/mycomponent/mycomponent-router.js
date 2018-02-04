const { Router } = require('restify-router');
const { InvalidArgumentError, MissingParameterError } = require('restify-errors');
const log = require('../../services/logger');

const myComponentRouter = new Router();

myComponentRouter.get('/api/components', (req, res, next) => {
  res.send([{ id: 1 }, { id: 2 }]);
  return next();
});

myComponentRouter.get('/api/components/:id', (req, res, next) => {
  res.send({ id: 1 });
  return next();
});

myComponentRouter.post('/api/components', (req, res, next) => {
  const data = req.body.data || '';
  log.info(`Trying to create new block with data '${data}'`);

  if (!data) {
    log.error("Body parameter 'data' is missing !");
    return next(new MissingParameterError("Body parameter 'data' is missing !"));
  }
  if (typeof data !== 'string') {
    log.error(`Invalid parameter. '${data}' found. Data must be string`);
    return next(new InvalidArgumentError(`'data' parameter is invalid. '${data}' found. Data must be string`));
  }

  res.status(201);
  res.send({ id: 3 });
  return next();
});

myComponentRouter.put('/api/components/:id', (req, res, next) => {
  res.status(200);
  res.send({ id: 4 });
  return next();
});

module.exports = myComponentRouter;
