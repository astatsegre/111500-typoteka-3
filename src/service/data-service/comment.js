'use strict';

const {nanoid} = require(`nanoid`);

class CommentService {

  getAll(article) {
    return article.comments;
  }

  delete(article, commentId) {
    const comment = article.comments.find((i) => i.id === commentId);
    if (!comment) {
      return null;
    }
    article.comments.filter((i) => i.id === commentId);
    return comment;
  }

  create(article, comment) {
    const newComment = {id: nanoid(), text: comment};
    article.comments.push(newComment);
    return newComment;
  }
}

module.exports = CommentService;
