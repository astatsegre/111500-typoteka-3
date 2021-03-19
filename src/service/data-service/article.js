'use strict';

class ArticleService {
  constructor(sequelize) {
    this._sequelize = sequelize;
    this._articles = sequelize.models.Article;
    this._categories = sequelize.models.Category;
  }
  getAll() {
    return this._articles.findAll();
  }
  getOne(id) {
    return this._articles.findByPk(id, {
      include:
        [`user`, `categories`, `comments`],
      group: [
        this._sequelize.col(`Article.id`), this._sequelize.col(`user.id`),
        this._sequelize.col(`comments.id`),
        this._sequelize.col(`categories.id`),
        this._sequelize.col(`categories->articles_categories.categoryId`),
        this._sequelize.col(`categories->articles_categories.articleId`)
      ]

    });
  }
  async create(article) {
    const articleModel = await this._articles.create(article);
    return articleModel.addCategories(article.categories);
  }
  async update(id, fieldsToUpdate) {
    const [updatedRow] = await this._articles.update(fieldsToUpdate, {where: {id}});
    return !!updatedRow;
  }
  delete(id) {
    return this._articles.destroy({where: {id}});
  }
}

module.exports = ArticleService;
