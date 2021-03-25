'use strict';

const sequelize = require(`../lib/sequelize`);
const Article = require(`./article`)(sequelize);
const User = require(`./user`)(sequelize);
const Category = require(`./category`)(sequelize);
const Comment = require(`./comment`)(sequelize);
const Aliases = require(`./aliases`);

module.exports = () => {


  // User + Article
  User.hasMany(Article, {
    as: Aliases.Articles,
    foreignKey: `userId`
  });
  Article.belongsTo(User, {
    as: `user`,
    foreignKey: `userId`
  });

  // User + Comment
  User.hasMany(Comment, {
    as: `comments`,
    foreignKey: `userId`
  });
  Comment.belongsTo(User, {
    foreignKey: `userId`
  });


  // Article + Comment
  Article.hasMany(Comment, {
    as: `comments`,
    foreignKey: `articleId`
  });
  Comment.belongsTo(Article, {
    as: `article`,
    foreignKey: `articleId`
  });

  // Category + Article
  Category.belongsToMany(Article, {
    through: `articles_categories`,
    as: `articles`,
    foreignKey: `categoryId`,
    timestamps: false
  });
  Article.belongsToMany(Category, {
    through: `articles_categories`,
    as: `categories`,
    foreignKey: `articleId`
  });

  return sequelize;
};
