'use strict';

const path = require(`path`);

const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 400
};

const PATH_TO_MOCKS = path.resolve(__dirname, `../../mock.json`);
const TEXTS_FOLDER = path.resolve(__dirname, `../../data`);
const CATEGORY_FILE = `categories.txt`;

module.exports = {HTTP_CODE, PATH_TO_MOCKS, TEXTS_FOLDER, CATEGORY_FILE};
