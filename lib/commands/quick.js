const { exec } = require('child_process');

const { log } = require('../util');

const quick = async (args) => {
  const [action, target] = args;

  if (!action) {
    log('Please provide an action.');
    return;
  }

  if (!target) {
    log('Please provide a action target.');
    return;
  }

  const actions = {
    'init': {
      targets: {
        'cz': {
          description: 'Initialize commitizen',
          command: 'commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact'
        },
        'twc': {
          description: 'Initialize Tailwind CSS',
          command: 'pnpx tailwindcss init -p'
        }
      }
    }
  };

  const actionObj = actions[action];

  if (!actionObj) {
    log(`Action ${action} not found.`);
    return;
  }

  const targetObj = actionObj.targets[target];

  if (!targetObj) {
    log(`Target ${target} not found.`);
    return;
  }

  const { description, command } = targetObj;

  log(`🚀 ${description}...`);

  try {
    await exec(command);
    log(`🎉 ${description} successfully.`);
  } catch (error) {
    log(`❌ ${description} failed.`);
    log(error);
  }
};

module.exports = quick;
