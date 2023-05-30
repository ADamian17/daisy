const { createSpinner } = require('nanospinner');
const { promisify } = require('util');
const { validateFilePath } = require('../../utils');
const fs = require('fs');
const mkdir = promisify(fs.mkdir);
const rmdir = promisify(fs.rmdir);

/**
 * @function createDirectory
 * @param {string} path - Sets basePath in the class
 */
module.exports = async function createDirectory(path) {
	try {
		const isValidPath = await validateFilePath(path);

		if (isValidPath) {
			const spinner = createSpinner('...creating directory').start();
			await mkdir(path);
			const createdDir = fs.existsSync(path);

			if (!createdDir) {
				spinner.stop();
				spinner.error({ text: 'something went wrong' });
				return false;
			}

			spinner.success({ text: 'directory created' });
			return true;
		}
	} catch (error) {
		return console.log(error);
	}
};
