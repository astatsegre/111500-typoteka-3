'use strict';

const express = require(`express`);

const routes = require(`../api`);


const DEFAULT_PORT = 3000;
const HTTP_NOT_FOUND_CODE = 404;

const app = express();

app.use(express.json());
app.use(`/api`, routes);

app.use((req, res) => {
  res.status(HTTP_NOT_FOUND_CODE).send(`Not found`);
});

const runServer = (userPort) => {
  const port = userPort || DEFAULT_PORT;
  app.listen(port, () => {
    console.log(`Слушаю на порту ${port}`);
  });
};

module.exports = runServer;
