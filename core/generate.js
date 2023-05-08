const path = require('path');

const commands = require('../commands');
const { validateBaseDirPath } = require('../utils');
const { existsSync } = require('fs');
const setBaseDir = require('../utils/helpers/setBaseDir');

module.exports = async function generate(cmd, flags) {
	const task = commands.get(cmd);

	if (!task) {
		return console.log('Please run `daisy --help` to see all option');
	}

	const baseDirPath = setBaseDir(flags.baseDir, cmd);
	const isValidPath = await validateBaseDirPath(baseDirPath);

	if (isValidPath) {
		task(flags);
	} else {
		process.exit(0);
	}
};
