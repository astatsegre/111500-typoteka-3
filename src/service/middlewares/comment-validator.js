'use strict';

const {HTTP_CODE} = require(`../constants`);

const requiredKeys = [`text`];

module.exports = (req, res, next) => {
  const userCommentKeys = Object.keys(req.body);
  const isValidComment = requiredKeys.every((key) => userCommentKeys.includes(key));
  if (!isValidComment) {
    res.status(HTTP_CODE.BAD_REQUEST);
  }
  next();
};
