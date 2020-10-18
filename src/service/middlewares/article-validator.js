'use strict';

const {HTTP_CODE} = require(`../constants`);

const articleKeys = [`category`, `title`, `comments`, `createdDate`, `announce`, `fullText`];

module.exports = (req, res, next) => {
  const userArticleKeys = Object.keys(req.body);
  const isAllKeysExist = articleKeys.every((i) => userArticleKeys.includes(i));
  if (!isAllKeysExist) {
    res.status(HTTP_CODE.BAD_REQUEST).send(`Bad request`);
  }
  next();
};
