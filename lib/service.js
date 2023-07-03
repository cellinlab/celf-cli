const program = require('commander');

const pkgInfo = require('../package.json');
const cmdInfo = require('./commands/info.js');
const cmdTemplate = require('./commands/template.js');

class Service {
  constructor() {
    this._init();
  }

  _init() {
    // console.log('Service._init()');

    program.version(pkgInfo.version, '-V, --version', 'Show package version');
    program.helpOption('-H, --help', 'Show help');

    this._registerCommand('info', cmdInfo);
    this._registerCommand('tmpl', cmdTemplate);
  }

  _registerCommand(_id, _command) {
    // console.log('Service._registerCommand()', _id, _command);

    program.command(_id).action(_command);
  }

  run(_id, _args = {}, _rawArgv = []) {
    // console.log('Service.run()', _id, _args, _rawArgv);

    program.parse(_rawArgv, { from: 'user' });
  }
}

module.exports = Service;
