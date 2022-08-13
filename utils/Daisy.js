const inquirer = require('inquirer');
const {
	validateBaseDirPath,
	validateNestedDirPath
} = require('./pathValidator');
const mainDirPaths = require('./mainDirPath');

class Daisy {
	async generate(userChoice) {
		const current = mainDirPaths.get(userChoice);
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

			current?.generateFiles(isValidFilePath);
		}
	}
}

module.exports = new Daisy();
