'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);

module.exports = (searchService) => {
  const searchRouter = new Router();

  searchRouter.get(`/`, async (req, res) => {
    const {query} = req.query;
    const result = searchService.find(query);
    res.status(HTTP_CODE.OK).json(result);
  });

  return searchRouter;
};
