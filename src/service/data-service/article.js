'use strict';

const {nanoid} = require(`nanoid`);

class ArticleService {
  constructor(articles) {
    this._articles = articles;
  }
  getAll() {
    return this._articles;
  }
  getOne(id) {
    return this._articles.find((i) => i.id === id);
  }
  create(article) {
    this._articles.push(Object.assign(article, {id: nanoid()}));
  }
  update(id, fieldsToUpdate) {
    let offer = this.getOne(id);
    offer = Object.assign(offer, fieldsToUpdate);
    return offer;
  }
  delete(id) {
    this._articles = this._articles.filter((i) => i.id === id);
  }
}

module.exports = ArticleService;
