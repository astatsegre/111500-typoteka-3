'use strict';

const {Op} = require(`sequelize`);

class SearchService {
  constructor(sequelize) {
    this._articles = sequelize.models.Article;
  }

  find(query) {
    if (!query) {
      return [];
    }
    return this._articles.findAll({where: {title: {[Op.substring]: query.toLowerCase()}}});
  }

}

module.exports = SearchService;
