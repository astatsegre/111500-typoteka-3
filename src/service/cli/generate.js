'use strict';

const {writeFile} = require(`fs`).promises;
const path = require(`path`);

const chalk = require(`chalk`);

const {getRandomNumber, threeMonthsFromNowInMS} = require(`../utils`);
const constants = require(`../constants`);

const DEFAULT_OBJECTS_NUMBER = 1;
const MAX_COUNT = 1000;

const generateOffer = async (value) => {
  const objectsInArrayNumber = Number.parseInt(value, 10) || DEFAULT_OBJECTS_NUMBER;
  if (objectsInArrayNumber > MAX_COUNT) {
    console.log(chalk.red(`Не больше 1000 объявлений`));
    process.exit(1);
  }
  const resultArray = [];
  for (let i = 0; i < objectsInArrayNumber; i++) {
    resultArray.push(await generateMockedObject());
  }
  try {
    await writeFile(path.resolve(`./mock.json`), JSON.stringify(resultArray));
  } catch (e) {
    console.log(chalk.red(`Ошибка: ${e}`));
    process.exit(1);
  }
  console.log(chalk.green(`Готово!`));
  process.exit(0);
};

const generateMockedObject = () => {
  return {
    title: constants.titleList[getRandomNumber(0, constants.titleList.length)],
    createdDate: new Date(getRandomNumber(threeMonthsFromNowInMS, +new Date())),
    announce: randomSliceArray(`textList`, constants.SENTENCES_IN_ANNOUNCE_MAX),
    fullText: randomSliceArray(`textList`, constants.textList.length),
    category: randomSliceArray(`categoryList`)
  };
};

const randomSliceArray = (arrayName, maxLength) => {
  const start = getRandomNumber(0, constants[arrayName].length - 1);
  const end = getRandomNumber(start + 1, maxLength ? start + 1 + maxLength : constants[arrayName].length);
  return constants[arrayName].slice(start, end);
};

module.exports = generateOffer;
