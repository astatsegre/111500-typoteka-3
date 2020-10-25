'use strict';

const express = require(`express`);

const getRoutes = require(`../api`);

const DEFAULT_PORT = 3000;
const HTTP_NOT_FOUND_CODE = 404;

const runServer = async (userPort) => {
  const app = express();
  const port = userPort || DEFAULT_PORT;

  app.use(express.json());
  app.use(`/api`, await getRoutes());

  app.use((req, res) => {
    res.status(HTTP_NOT_FOUND_CODE).send(`Not found`);
  });
  app.listen(port, () => {
    console.log(`Слушаю на порту ${port}`);
  });
};

module.exports = runServer;
