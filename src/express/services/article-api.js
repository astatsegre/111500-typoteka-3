'use strict';

const axios = require(`axios`);
const {API_TIMEOUT, API_BASE_URL} = require(`../constants`);

const _axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
});

class ArticleApi {
  getArticles() {
    return _axios.get(`/articles`);
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
