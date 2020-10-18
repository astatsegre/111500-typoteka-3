'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);

module.exports = (service) => {
  const categoriesRouter = new Router();

  categoriesRouter.get(`/`, async (req, res) => {
    const categories = service.getAll();
    res.status(HTTP_CODE.OK).json(categories);
  });

  return categoriesRouter;
};
