'use strict';

const fs = require(`fs`);
const {version} = require(`../../package.json`);
const constants = require(`./constants`);
const {getRandomNumber, threeMonthsFromNowInMS} = require(`./utils`);

const [commandName = ``, commandValue = null] = process.argv.slice(2);

const runCommand = (name, value) => {
  switch (name) {
    case `--generate`:
      generateOffer(value);
      break;
    case `--version`:
      showVersion();
      break;
    default:
      showHelp();
  }
};

const showHelp = () => {
  console.log(constants.helpText);
};

const showVersion = () => {
  console.log(`v${version}`);
};

const generateOffer = (value) => {
  const objectInArrayNumber = Number.parseInt(value, 10) || constants.DEFAULT_NUMBER;
  if (objectInArrayNumber > constants.MAX_COUNT) {
    console.log(`Не больше 1000 публикаций`);
    process.exit(1);
  }
  const resultArray = [];
  for (let i = 0; i < objectInArrayNumber; i++) {
    resultArray.push(generateMockedObject());
  }
  fs.writeFile(`./mock.json`, JSON.stringify(resultArray), (err) => {
    if (err) {
      process.exit(1);
    }
    process.exit(0);
  });
};

const randomSliceArray = (arrayName, maxLength) => {
  const start = getRandomNumber(0, constants[arrayName].length - 1);
  const end = getRandomNumber(start + 1, maxLength ? start + 1 + maxLength : constants[arrayName].length);
  return constants[arrayName].slice(start, end);
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

if (!module.parent) {
  runCommand(commandName, commandValue);
}
