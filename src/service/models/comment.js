'use strict';

const {Model, DataTypes} = require(`sequelize`);
const Aliases = require(`./aliases`);

module.exports = (sequelize) => {
  class Comment extends Model {}

  Comment.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT(1000), // eslint-disable-line
      allowNull: false
    }
  }, {sequelize, modelName: `Comment`, tableName: Aliases.Comments, timestamps: false});

  return Comment;
};
