'use strict';

const {readFile} = require(`fs`).promises;
const http = require(`http`);
const path = require(`path`);

const chalk = require(`chalk`);

const DEFAULT_PORT = 3000;
const HTTP_NOT_FOUND_CODE = 404;
const HTTP_OK_CODE = 200;
const HTTP_SERVER_ERROR = 500;

const runServer = (userPort) => {
  const port = userPort || DEFAULT_PORT;
  const httpServer = http.createServer(onClientConnect);
  httpServer.listen(port, (err) => {
    if (err) {
      console.error(chalk.red(`Ошибка при создании сервера`));
    }
    console.log(`Слушаю на порту ${port}`);
  });
};

const onClientConnect = async (request, response) => {
  switch (request.url) {
    case `/`:
      try {
        const titlesInLi = await getPostTitles();
        responseOk(response, `<ul>${titlesInLi}</ul>`);
      } catch (e) {
        if (e && e.code === `ENOENT`) {
          responseNotFound(response);
          return;
        }
        console.log(chalk.red(e));
        responseUnknownError(response);
      }
      break;
    default:
      responseNotFound(response);
  }
};

const getPostTitles = async () => {
  const postList = JSON.parse(await readFile(path.resolve(__dirname, `../mock.json`), `utf8`));
  return postList.reduce((accum, currentValue) => {
    return accum + `<li>${currentValue.title}</li>`;
  }, ``);
};

const responseNotFound = (response) => {
  response.writeHead(HTTP_NOT_FOUND_CODE, {
    'Content-Type': `text/plain; charset=UTF-8`
  });
  response.end(`Not found`);
};

const responseUnknownError = (response) => {
  response.writeHead(HTTP_SERVER_ERROR, {
    'Content-Type': `text/plain; charset=UTF-8`
  });
  response.end(`Internal server error`);
};

const responseOk = (response, body) => {
  response.writeHead(HTTP_OK_CODE, {
    'Content-Type': `text/html; charset=UTF-8`
  });
  response.end(body);
};

module.exports = runServer;
