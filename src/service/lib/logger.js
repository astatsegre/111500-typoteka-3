'use strict';

const pino = require(`pino`);
const path = require(`path`);

const {ENV} = require(`../constants`);
const PATH_TO_LOGS = `../logs/api.log`;
const isDev = process.env.NODE_ENV === ENV.DEV;

const logger = pino({
  name: `base-logger`,
  level: process.env.LOG_LEVEL || `info`,
  prettyPrint: isDev
}, isDev ? process.stdout : pino.destination(path.resolve(__dirname, PATH_TO_LOGS)));

module.exports = {
  logger,
  getLogger(options = {}) {
    return logger.child(options);
  }
};
