'use strict';

const path = require(`path`);

const express = require(`express`);

const myRouter = require(`./routes/my`);
const articlesRouter = require(`./routes/articles`);
const ArticleApi = require(`./services/article-api`);
const MainApi = require(`./services/main-api`);
const {DEFAULT_ARTICLES_LIMIT, DEFAULT_PAGE} = require(`./constants`);

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
  let {page} = req.query;
  if (!page || page < 1) {
    page = DEFAULT_PAGE;
  }
  page = +page;
  try {
    const {data} = await ArticleApi.getArticles(page);
    let hotArticles = [...data.rows].sort((a, b) => {
      return b.comments.length - a.comments.length;
    }).slice(0, 4);

    const pagesTotalAmount = Math.ceil(data.count / DEFAULT_ARTICLES_LIMIT);
    if (page > pagesTotalAmount) {
      page = pagesTotalAmount;
    }
    const pagesAfterCurrentAmount = pagesTotalAmount - page;
    const pagerLength = pagesAfterCurrentAmount > 4 ? 4 : pagesAfterCurrentAmount;
    let pagesNumber = [page];
    for (let i = 1; i <= pagerLength; i++) {
      pagesNumber.push(page + i);
    }
    const pager = {
      currentPage: page,
      isLeftBtnDisabled: page === 1,
      isRightBtnDisabled: page >= pagesTotalAmount,
      numbers: pagesNumber,
    };
    options.articles = data.rows;
    options.pager = pager;
    options.hotArticles = hotArticles;
  } catch (e) {
    options.articles = [];
    options.hotArticles = [];
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
    options = {results: [], query: ``};
  }
  res.render(`search`, options);
});
app.get(`/categories`, (req, res) => res.render(`all-categories`));

app.listen(DEFAULT_PORT, () => {
  console.log(`Сервер на порту ${DEFAULT_PORT}`);
});
