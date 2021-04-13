'use strict';

const path = require(`path`);

const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 400
};

const ENV = {
  DEV: `dev`,
  PROD: `prod`,
  JEST: `jest`
};

const PATH_TO_MOCKS = path.resolve(__dirname, `../../mock.json`);
const TEXTS_FOLDER = path.resolve(__dirname, `../../data`);
const CATEGORY_FILE = `categories.txt`;

const DEFAULT_ARTICLES_OFFSET = 0;
const DEFAULT_ARTICLES_LIMIT = 8;


module.exports = {HTTP_CODE, PATH_TO_MOCKS, TEXTS_FOLDER, CATEGORY_FILE, ENV, DEFAULT_ARTICLES_OFFSET, DEFAULT_ARTICLES_LIMIT};
