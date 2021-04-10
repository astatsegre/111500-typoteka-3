'use strict';

const axios = require(`axios`);
const {API_TIMEOUT, API_BASE_URL, DEFAULT_ARTICLES_LIMIT, DEFAULT_PAGE} = require(`../constants`);

const _axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
});

class ArticleApi {
  getArticles(page = DEFAULT_PAGE) {
    return _axios.get(`/articles?limit=${DEFAULT_ARTICLES_LIMIT}&offset=${(page - 1) * DEFAULT_ARTICLES_LIMIT}`);
  }
  getOneArticle(id) {
    return _axios.get(`/articles/${id}`);
  }
  addArticle(data) {
    return _axios.post(`/articles`, data);
  }
  getComments(articleId) {
    return _axios.get(`articles/${articleId}/comments`);
  }

}

module.exports = new ArticleApi();
