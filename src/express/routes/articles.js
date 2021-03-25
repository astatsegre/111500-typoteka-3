'use strict';

const {Router} = require(`express`);
const multer = require(`multer`);
const {nanoid} = require(`nanoid`);
const path = require(`path`);

const ArticleApi = require(`../services/article-api`);
const CategoryApi = require(`../services/category-api`);

const UPLOAD_DIR = `../../../upload/img/`;
const uploadDirAbsolute = path.resolve(__dirname, UPLOAD_DIR);
const articlesRouter = new Router();

const storage = multer.diskStorage({
  destination: uploadDirAbsolute,
  filename: (req, file, cb) => {
    const uniqueName = nanoid(10);
    const extension = file.originalname.split(`.`).pop();
    cb(null, `${uniqueName}.${extension}`);
  }
});

const upload = multer({storage});

articlesRouter.get(`/category/:id`, (req, res) => res.render(`articles-by-category`));
articlesRouter.get(`/add`, async (req, res) => {
  const {data} = await CategoryApi.getCategories();
  res.render(`new-post`, {categories: data});
});
articlesRouter.post(`/add`, upload.single(`picture`), async (req, res) => {
  const {body, file} = req;
  const articleData = {
    picture: file.filename,
    createdAt: body.createdAt,
    annotation: body.annotation,
    fullText: body.fullText,
    title: body.title,
    categories: body.categories,
    userId: 2 // TODO: change after auth implementation
  };
  try {
    await ArticleApi.addArticle(articleData);
    res.redirect(`/my`);
  } catch (e) {
    res.redirect(`back`);
  }
});
articlesRouter.get(`/:id`, async (req, res) => {
  let options = {};
  try {
    const {data} = await ArticleApi.getOneArticle(req.params.id);
    options.article = data;
  } catch (e) {
    options.article = {};
  }
  res.render(`post`, options);
});
articlesRouter.get(`/edit/:id`, async (req, res) => {
  let options = {};
  try {
    const {data} = await ArticleApi.getOneArticle(req.params.id);
    options.article = data;
  } catch (e) {
    options.article = {};
  }
  res.render(`edit-post`, options);
});

module.exports = articlesRouter;
