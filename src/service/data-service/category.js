'use strict';

class CategoryService {
  constructor(sequelize) {
    this._categories = sequelize.models.Category;
  }

  getAll() {
    return this._categories.findAll({raw: true});
  }
}

module.exports = CategoryService;
