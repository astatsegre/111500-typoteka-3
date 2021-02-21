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
    return logger.info(`Слушаю на порту ${port}`);
  });

  logger.info(`Устанавливаю соединение с БД`);
  sequelize.authenticate().then(() => {
    logger.info(`Соединение c БД установлено`);
  }).catch((error) => {
    logger.error(`Ошибка установки соединения: ${error}`);
  });
};

module.exports = runServer;
