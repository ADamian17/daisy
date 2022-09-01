const { createUserChoiceMap, validateBaseDirPath } = require('../utils');
const { mainDirPaths } = require('../config');

class Daisy {
	async generate(userChoice) {
		const userChoiceMap = createUserChoiceMap(userChoice);

		if (!mainDirPaths.get(userChoiceMap.get('task'))) {
			return console.log('Please run `daisy help` to see all option');
		}

		const current = mainDirPaths.get(userChoiceMap.get('task'));
		const baseDirPath = current?.baseDirPath;
		const isValidPath = await validateBaseDirPath(baseDirPath);

		if (isValidPath) {
			current.taskInit(userChoiceMap.get('nested-dir'));
		} else {
			process.exit();
		}
	}
}

module.exports = new Daisy();
