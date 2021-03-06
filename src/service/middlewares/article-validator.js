'use strict';

const {HTTP_CODE} = require(`../constants`);

const articleKeys = [`categories`, `title`, `createdAt`, `annotation`, `fullText`];

module.exports = (req, res, next) => {
  const userArticleKeys = Object.keys(req.body);
  const isAllKeysExist = articleKeys.every((i) => userArticleKeys.includes(i));
  if (!isAllKeysExist) {
    return res.status(HTTP_CODE.BAD_REQUEST).send(`Bad request`);
  }
  return next();
};
