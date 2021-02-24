'use strict';

const getApp = require(`../api`);
const logger = require(`../lib/logger`).getLogger({name: `api`});
const sequelize = require(`../lib/sequelize`);
const {getMockedData, getMockedCategoryList} = require(`../lib/get-mocked-data`);

const DEFAULT_PORT = 3000;

const runServer = async (userPort) => {
  const port = userPort || DEFAULT_PORT;

  const app = getApp(await getMockedData(), await getMockedCategoryList());

  app.listen(port, (err) => {
    if (err) {
      return logger.error(err);
    }
    return logger.info(`Listen on port ${port}`);
  });

  logger.info(`Trying to connect DB`);
  sequelize.authenticate().then(() => {
    logger.info(`Connection to the DB is established`);
  }).catch((error) => {
    logger.error(`Error, while connecting DB: ${error}`);
  });
};

module.exports = runServer;
