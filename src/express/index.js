'use strict';

const express = require(`express`);

const myRouter = require(`./routes/my`);
const articlesRouter = require(`./routes/articles`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);

app.get(`/`, (req, res) => res.send(req.originalUrl));
app.get(`/register`, (req, res) => res.send(req.originalUrl));
app.get(`/login`, (req, res) => res.send(req.originalUrl));
app.get(`/search`, (req, res) => res.send(req.originalUrl));
app.get(`/categories`, (req, res) => res.send(req.originalUrl));

app.listen(DEFAULT_PORT, () => {
  console.log(`Сервер на порту ${DEFAULT_PORT}`);
});
