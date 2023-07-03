const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const ora = require('ora');

const downloadRepo = async (repo, dest) => {
  const process = ora({
    text: `Downloading template from ${repo}`,
    color: 'blue',
    spinner: 'dots'
  });
  process.start();

  try {
    await download(repo, dest);
  } catch (err) {
    process.fail();
    console.log(err);
  }

  process.succeed();
};

module.exports = downloadRepo;
