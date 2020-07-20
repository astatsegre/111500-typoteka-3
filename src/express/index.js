'use strict';

const path = require(`path`);

const express = require(`express`);

const myRouter = require(`./routes/my`);
const articlesRouter = require(`./routes/articles`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);

app.set(`views`, path.resolve(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => res.render(`main`));
app.get(`/register`, (req, res) => res.render(`sign-up`));
app.get(`/login`, (req, res) => res.render(`login`));
app.get(`/search`, (req, res) => res.render(`search`));
app.get(`/categories`, (req, res) => res.render(`all-categories`));

app.listen(DEFAULT_PORT, () => {
  console.log(`Сервер на порту ${DEFAULT_PORT}`);
});
