const { existsSync } = require('fs');
const { createSpinner } = require('nanospinner');
const waitForIt = require('./waitForit');

const validateBaseDirPath = async path => {
	try {
		const spinner = createSpinner('...checking base path').start();
		await waitForIt(200);
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
	} catch (error) {
		process.exit(0);
	}
};

const validateFilePath = async path => {
	try {
		const spinner = createSpinner('...checking file path').start();
		await waitForIt(200);

		if (!existsSync(path)) {
			spinner.success({
				text: 'File path is valid'
			});

			return true;
		}

		spinner.error({
			text: `There is already a file with that name`
		});

		return false;
	} catch (error) {
		process.exit(0);
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
	validateNestedDirPath,
	validateFilePath
};
