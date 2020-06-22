'use strict';

const constants = require(`./constants`);

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); // not including
  return Math.floor(Math.random() * (max - min)) + min;
};

const threeMonthsFromNowInMS = +new Date() - constants.MONTH_IN_MS * 3;

module.exports = {getRandomNumber, threeMonthsFromNowInMS};
