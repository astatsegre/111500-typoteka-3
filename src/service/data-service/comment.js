'use strict';

class CommentService {
  constructor(sequelize) {
    this._comment = sequelize.models.Comment;
  }

  getAll(articleId) {
    return this._comment.findAll({where: {articleId}});
  }

  async delete(commentId) {
    const deletedComment = await this._comment.destroy({where: {id: commentId}});
    return !!deletedComment;
  }

  create(articleId, comment) {
    return this._comment.create({articleId, ...comment});
  }
}

module.exports = CommentService;
