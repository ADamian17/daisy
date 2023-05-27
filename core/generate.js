const { validateBaseDirPath } = require('../utils');
const commands = require('../commands');
const setBaseDir = require('../utils/helpers/setBaseDir');
const { green, yellow } = require('chalk');

module.exports = async function generate(cmd, flags) {
	try {
		const task = commands.get(cmd);

		if (!task) {
			return console.log(
				`Please run ${green('daisy')} ${yellow(
					'--help'
				)} to see all option`
			);
		}

		const baseDirPath = setBaseDir(cmd, flags.dir);
		const isValidPath = await validateBaseDirPath(baseDirPath);

		if (!isValidPath) throw new Error('path is not valid');

		task(flags);
	} catch (error) {
		if (error === 'path is not valid') {
			console.log(error);
		}
		process.exit(0);
	}
};
