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
    article.comments.push({id: nanoid(), text: comment});
    return comment;
  }
}

module.exports = CommentService;
