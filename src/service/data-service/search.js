'use strict';

class SearchService {
  constructor(articleList) {
    this._articles = articleList;
  }

  find(query) {
    if (!query) {
      return [];
    }
    return this._articles.filter((article) => article.title.toLowerCase().includes(query.toLowerCase()));
  }

}

module.exports = SearchService;
