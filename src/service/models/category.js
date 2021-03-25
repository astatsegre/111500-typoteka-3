'use strict';

const {Model, DataTypes} = require(`sequelize`);
const Aliases = require(`./aliases`);

module.exports = (sequelize) => {
  class Category extends Model {}

  Category.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT(35), // eslint-disable-line
      allowNull: false
    }
  }, {sequelize, modelName: `Category`, tableName: Aliases.Categories, timestamps: false});

  return Category;
};
