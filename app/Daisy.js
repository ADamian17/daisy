const { createUserChoiceMap, validateBaseDirPath } = require('../utils');
const { mainDirPaths } = require('../config');
const userChoiceMapType = require('../config/userChoiceMapType');

class Daisy {
	async generate(userChoice, flags) {
		const userChoiceMap = createUserChoiceMap(userChoice, flags.shared);
		const task = userChoiceMap.get(userChoiceMapType.TASK);

		if (!mainDirPaths.get(task)) {
			return console.log('Please run `daisy help` to see all option');
		}

		const current = mainDirPaths.get(task);
		const baseDirPath = current?.baseDirPath;
		const isValidPath = await validateBaseDirPath(baseDirPath);

		if (isValidPath) {
			current.taskInit(userChoiceMap.get(userChoiceMapType.SHARED));
		} else {
			process.exit();
		}
	}
}

module.exports = new Daisy();
