'use strict';

const {Model, DataTypes} = require(`sequelize`);
const Aliases = require(`./aliases`);

module.exports = (sequelize) => {
  class User extends Model {}
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize, modelName: `User`, tableName: Aliases.Users
  });

  return User;
};
