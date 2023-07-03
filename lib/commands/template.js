const inquirer = require('inquirer');

const downloadRepo = require('../download');
const { log } = require('../util');

const template = async () => {
  const tmpList = [
    'Vite+React',
    'Vite+React+Router',
    'Vite+React+TS',
    'Vite+React+TS+Router',
  ];

  const questions = [
    {
      type: 'list',
      name: 'template',
      message: 'Select a template:',
      choices: tmpList
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Input project name(default: celf-app):',
      default: 'celf-app'
    }
  ];
  const anwsers = await inquirer.prompt(questions);

  const { template, projectName } = anwsers;
  const repo = `github:cellinlab/celf-template-${template.toLowerCase().replace(/\+/g, '-')}`;

  await downloadRepo(repo, projectName);

  log(`\n🎉 Successfully created project ${projectName}.`);
};

module.exports = template;
