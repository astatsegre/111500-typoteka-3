'use strict';

const path = require(`path`);
const {readFile} = require(`fs`).promises;
const os = require(`os`);

const {TEXTS_FOLDER} = require(`./constants`);

const MONTH_IN_MS = 2629743000;
const PATH_TO_MOCKS = path.resolve(__dirname, `../../mock.json`);

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); // not including
  return Math.floor(Math.random() * (max - min)) + min;
};

const getArrayFromFile = async (fileName) => {
  const list = await readFile(path.resolve(__dirname, `${TEXTS_FOLDER}/`, fileName), `utf8`);
  return list.split(os.EOL).filter((i) => i);
};

const threeMonthsFromNowInMS = +new Date() - MONTH_IN_MS * 3;

module.exports = {getRandomNumber, threeMonthsFromNowInMS, PATH_TO_MOCKS, getArrayFromFile};
