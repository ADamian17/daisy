const { existsSync } = require('fs');
const { createSpinner } = require('nanospinner');
const waitForIt = require('./waitForit');

const validateBaseDirPath = async path => {
	try {
		const spinner = createSpinner('...checking base path').start();
		await waitForIt(500);
		const isValid = existsSync(path);

		if (!isValid) {
			spinner.stop();
			spinner.error({
				text: `${path} does not exists`
			});
			return false;
		}

		spinner.success({
			text: 'Base directory is valid'
		});
		return true;
	} catch (error) {}
};

const validateNestedDirPath = async path => {
	const spinner = createSpinner('...checking file path').start();
	await waitForIt();

	if (existsSync(path)) {
		spinner.stop();
		spinner.error({
			text: `file at (${path}) already exits`
		});
		return true;
	} else {
		spinner.success();
		return false;
	}
};

module.exports = {
	validateBaseDirPath,
	validateNestedDirPath
};
