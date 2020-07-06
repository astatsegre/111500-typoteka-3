'use strict';

const {generateOffer, showVersion, showHelp} = require(`./cli`);

const [commandName = ``, commandValue = null] = process.argv.slice(2);

const runCommand = async (name, value) => {
  switch (name) {
    case `--generate`:
      await generateOffer(value);
      break;
    case `--version`:
      showVersion();
      break;
    default:
      showHelp();
  }
};

if (!module.parent) {
  runCommand(commandName, commandValue);
}

