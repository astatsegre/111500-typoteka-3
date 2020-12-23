'use strict';

const {Router} = require(`express`);

const myRouter = new Router();
const ArticleApi = require(`../services/article-api`);

myRouter.get(`/`, async (req, res) => {
  let options = {};
  try {
    const {data} = await ArticleApi.getArticles();
    options.articles = data;
  } catch (e) {
    options.articles = {};
  }
  res.render(`my`, options);
});
myRouter.get(`/comments`, async (req, res) => {
  let options = {};
  try {
    const {data} = await ArticleApi.getArticles();
    options.articles = data.slice(0, 3);
  } catch (e) {
    options.articles = {};
  }
  res.render(`comments`, options);
});

module.exports = myRouter;
