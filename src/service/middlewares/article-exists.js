'use strict';

const {HTTP_CODE} = require(`../constants`);

module.exports = (service) => (req, res, next) => {
  const {articleId} = req.params;
  const article = service.getOne(articleId);
  if (!article) {
    return res.status(HTTP_CODE.NOT_FOUND).send(`Not found. id ${articleId}`);
  }
  res.locals.article = article;
  return next();
};
