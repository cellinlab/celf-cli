const chalk = require('chalk');
const clear = require('clear');

const log = async (msg = '', color = 'white') => {
  console.log(chalk[color](msg));
};

module.exports = {
  clear,
  log
};
