'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);

module.exports = (searchService) => {
  const searchRouter = new Router();

  searchRouter.get(`/`, async (req, res) => {
    const {query} = req.query;
    if (!query) {
      return res.status(HTTP_CODE.BAD_REQUEST).send(`provide "query" query-param`);
    }
    const result = searchService.find(query);
    return res.status(HTTP_CODE.OK).json(result);
  });

  return searchRouter;
};
