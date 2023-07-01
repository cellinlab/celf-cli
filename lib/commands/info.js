const { promisify } = require('util');
const figlet = promisify(require('figlet'));

const pkgInfo = require('../../package.json');
const { log, clear } = require('../util');

const info = async () => {
  clear();

  const logo = await figlet('Celf CLI');
  log(logo, 'magenta');

  log('Welcome to Celf CLI', 'blue');

  log(`🔄 Version: ${pkgInfo.version}`, 'blue');
  log(`💻 Author: ${pkgInfo.author}`, 'blue');
  log(`🌍 License: ${pkgInfo.license}`, 'blue');
  log(`🐙 Repository: ${pkgInfo.repository.url}`, 'blue');
  log(`🌐 Homepage: ${pkgInfo.homepage}`, 'blue');

  log();

  log('Usage: celf <command> [options]');
};

module.exports = info;
