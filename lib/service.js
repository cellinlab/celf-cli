const program = require('commander');

const pkgInfo = require('../package.json');
const cmdInfo = require('./commands/info.js');

class Service {
  constructor() {
    this._init();
  }

  _init() {
    console.log('Service._init()');

    program.version(pkgInfo.version, '-v, --version', 'Show package version');
    program.helpOption('-h, --help', 'Show help');

    this._registerCommand('info', cmdInfo);
  }

  _registerCommand(_id, _command) {
    console.log('Service._registerCommand()', _id, _command);

    program.command(_id).action(_command);
  }

  run(_id, _args = {}, _rawArgv = []) {
    console.log('Service.run()', _id, _args, _rawArgv);

    program.parse(_rawArgv, { from: 'user' });
  }
}

module.exports = Service;
