'use strict';

const path = require(`path`);

const express = require(`express`);

const myRouter = require(`./routes/my`);
const articlesRouter = require(`./routes/articles`);
const ArticleApi = require(`./services/article-api`);
const MainApi = require(`./services/main-api`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);

app.set(`views`, path.resolve(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.get(`/`, async (req, res) => {
  let options = {};
  try {
    const {data} = await ArticleApi.getArticles();
    options.articles = data;
  } catch (e) {
    options.articles = [];
  }
  res.render(`main`, options);
});
app.get(`/register`, (req, res) => res.render(`sign-up`));
app.get(`/login`, (req, res) => res.render(`login`));
app.get(`/search`, async (req, res) => {
  const {query} = req.query;
  let options = {};
  try {
    const {data} = await MainApi.search(query);
    options = {results: data, query: query || ``};
  } catch (e) {
    options = {results: []};
  }
  res.render(`search`, options);
});
app.get(`/categories`, (req, res) => res.render(`all-categories`));

app.listen(DEFAULT_PORT, () => {
  console.log(`Сервер на порту ${DEFAULT_PORT}`);
});
