'use strict';

const {Router} = require(`express`);

const {HTTP_CODE} = require(`../constants`);
const articleExists = require(`../middlewares/article-exists`);
const articleValidator = require(`../middlewares/article-validator`);
const commentValidator = require(`../middlewares/comment-validator`);

module.exports = (articleService, commentService) => {
  const articleRouter = new Router();

  articleRouter.get(`/`, async (req, res) => {
    const articles = await articleService.getAll();
    res.status(HTTP_CODE.OK).json(articles);
  });
  articleRouter.get(`/:articleId`, articleExists(articleService), async (req, res) => {
    res.status(HTTP_CODE.OK).json(await res.locals.article);
  });
  articleRouter.post(`/`, articleValidator, async (req, res) => {
    const createdOffer = await articleService.create(req.body);
    console.log(`createdOffer`, createdOffer);
    res.status(HTTP_CODE.CREATED).json(createdOffer);
  });
  articleRouter.put(`/:articleId`, [articleExists(articleService), articleValidator], async (req, res) => {
    const {articleId} = req.params;
    const updatedArticle = await articleService.update(articleId, req.body);
    res.status(HTTP_CODE.OK).json(updatedArticle);
  });
  articleRouter.delete(`/:articleId`, articleExists(articleService), async (req, res) => {
    const {articleId} = req.params;
    await articleService.delete(articleId);
    res.status(HTTP_CODE.OK).json(res.locals.article);
  });

  // comments
  articleRouter.get(`/:articleId/comments`, async (req, res) => {
    const {articleId} = req.params;
    const comments = await commentService.getAll(articleId);
    res.status(HTTP_CODE.OK).json(comments);
  });
  articleRouter.delete(`/:articleId/comments/:commentId`, async (req, res) => {
    const {commentId} = req.params;
    res.status(HTTP_CODE.OK).json(await commentService.delete(commentId));
  });
  articleRouter.post(`/:articleId/comments`, commentValidator, async (req, res) => {
    const {articleId} = req.params;
    res.status(HTTP_CODE.CREATED).json(await commentService.create(articleId, req.body));
  });

  return articleRouter;
};


