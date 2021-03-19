'use strict';

const express = require(`express`);

const {HTTP_CODE} = require(`../constants`);
const articleRouter = require(`./articles`);
const categoryRouter = require(`./category`);
const searchRouter = require(`./search`);
const ArticleService = require(`../data-service/article`);
const CategoryService = require(`../data-service/category`);
const CommentService = require(`../data-service/comment`);
const SearchService = require(`../data-service/search`);
const logger = require(`../lib/logger`).getLogger({name: `api`});
const initModelsAndGetSequelize = require(`../models`);
const sequelize = initModelsAndGetSequelize();

const app = express();

const getApp = () => {
  app.use(express.json());
  app.use((req, res, next) => {
    logger.debug(`Request ${req.url}`);
    res.on(`finish`, () => {
      logger.info(`Status code ${res.statusCode}`);
    });
    next();
  });

  app.use(`/api/articles`, articleRouter(new ArticleService(sequelize), new CommentService(sequelize)));
  app.use(`/api/categories`, categoryRouter(new CategoryService(sequelize)));
  app.use(`/api/search`, searchRouter(new SearchService(sequelize)));

  app.use((req, res) => {
    res.status(HTTP_CODE.NOT_FOUND).send(`Not found`);
    logger.error(`${req.url} not found`);
  });

  app.use((err, req, _res, _next) => {
    logger.error(`Error occurred on the route ${req.url} with message: ${err.message}`);
  });

  return app;
};

module.exports = getApp;
