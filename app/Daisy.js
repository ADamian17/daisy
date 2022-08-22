const { createUserChoiceMap, validateBaseDirPath } = require('../utils');
const { mainDirPaths } = require('../config');

class Daisy {
	async generate(userChoice) {
		const userChoiceMap = createUserChoiceMap(userChoice);
		const current = mainDirPaths.get(userChoiceMap.get('task'));
		const baseDirPath = current?.baseDirPath;
		const isValidPath = await validateBaseDirPath(baseDirPath);

		if (isValidPath) {
			current.taskInit();
		} else {
			process.exit();
		}
	}
}

module.exports = new Daisy();
