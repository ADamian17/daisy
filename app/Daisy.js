const inquirer = require('inquirer');
const {
	validateBaseDirPath,
	validateNestedDirPath
} = require('./pathValidator');
const mainDirPaths = require('./mainDirPath');
const { createUserChoiceMap } = require('../utils');

class Daisy {
	async generate(userChoice) {
		const userChoiceMap = createUserChoiceMap(userChoice);
		const current = mainDirPaths.get(userChoiceMap.get('task'));
		const baseDirPath = current?.baseDirPath;
		const isValidPath = await validateBaseDirPath(baseDirPath);

		if (isValidPath) {
			const prompt = await inquirer.prompt({
				name: 'fileName',
				type: 'input',
				message: 'Enter file name'
			});

			const fileName = current?.setFileName(prompt.fileName);

			const isValidFilePath = await validateNestedDirPath(
				`${baseDirPath}/${fileName}`
			);

			current?.generateFiles(
				isValidFilePath,
				userChoiceMap.get('extension')
			);
		}
	}
}

module.exports = new Daisy();
