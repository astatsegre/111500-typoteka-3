'use strict';

const {Router} = require(`express`);

const articleRouter = require(`./articles`);
// const categoryRouter = require(`./category`);
// const searchRouter = require(`./search`);
const {getMockedData, getMockedCategoryList} = require(`../lib/get-mocked-data`);
const ArticleService = require(`../data-service/article`);
// const CategoryService = require(`../data-service/category`);
const CommentService = require(`../data-service/comment`);
// const SearchService = require(`../data-service/search`);

const app = new Router();

(async () => {
  const mockedData = await getMockedData();
  const mockedCategoryList = await getMockedCategoryList();
  app.use(`/articles`, articleRouter(new ArticleService(mockedData), new CommentService()));
  // app.use(`/categories`, categoryRouter(new CategoryService(mockedCategoryList)));
  // app.use(`/search`, searchRouter(new SearchService(mockedData)));
})();

module.exports = app;
