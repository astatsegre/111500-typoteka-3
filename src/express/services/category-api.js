'use strict';

const axios = require(`axios`);
const {API_TIMEOUT, API_BASE_URL} = require(`../constants`);

const _axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
});

class CategoryApi {
  getCategories() {
    return _axios.get(`/categories`);
  }
}

module.exports = new CategoryApi();
