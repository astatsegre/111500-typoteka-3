'use strict';

const {Model, DataTypes} = require(`sequelize`);
const Aliases = require(`./aliases`);

module.exports = (sequelize) => {
  class Article extends Model {}
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    annotation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullText: {
      type: DataTypes.STRING(1005), // eslint-disable-line
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize, modelName: `Article`, tableName: Aliases.Articles
  });

  return Article;
};
