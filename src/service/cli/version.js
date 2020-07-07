'use strict';

const {version} = require(`../../../package.json`);

const chalk = require(`chalk`);

const showVersion = () => {
  console.log(chalk.blue(`v${version}`));
};

module.exports = showVersion;
