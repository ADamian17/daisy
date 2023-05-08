const { existsSync } = require('fs');
const { createSpinner } = require('nanospinner');
const waitForIt = require('./waitForit');

const validateBaseDirPath = async path => {
	const spinner = createSpinner('...checking base path').start();
	await waitForIt(500);

	if (existsSync(path)) {
		spinner.success({
			text: 'Base directory is valid'
		});
		return true;
	} else {
		spinner.stop();
		spinner.error({
			text: `${path} does not exists`
		});
		return false;
	}
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
