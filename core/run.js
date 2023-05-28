const { green, yellow } = require('chalk');

const { validateBaseDirPath } = require('../utils');
const commands = require('../commands');
const setBaseDir = require('../utils/helpers/setBaseDir');

module.exports = async function (cmd, flags) {
	try {
		const task = commands.get(cmd);

		if (!task) {
			return console.log(
				`Please run ${green('daisy')} ${yellow(
					'--help'
				)} to see all option`
			);
		}

		const path = setBaseDir(cmd, flags.dir);
		const isValidPath = await validateBaseDirPath(path);

		if (!isValidPath) throw new Error('path is not valid');

		task.init({ path, flags, cmd });
	} catch (error) {
		if (error === 'path is not valid') {
			console.log(error);
		}
		process.exit(0);
	}
};
