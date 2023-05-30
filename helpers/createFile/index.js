const { createSpinner } = require('nanospinner');

const createMainFile = require('../createMainFile');
const FileContent = require('../FileContent');
const MainFile = require('../MainFile');
const StyleFile = require('../StyleFile');
const writeFile = require('../writeFile');

/**
 * @method init
 * @param {Object} file - File information
 * @param {string} file.name - Name for the file
 * @param {string} file.path - Path where the file is going to be create.
 * @param {Object} flags - Represent available options in our application
 * @param {boolean} flags.ts - If is set to true create file with .ts extension
 * @param {boolean} flags.cssMod - If is set to true create file with .module.css or .module.scss extension
 * @param {boolean} flags.sass - If is set to true create file with .scss extension
 * @param {boolean} flags.withStylesFile - If is set to true adds styles files ``css`` or ``sass``
 * @return {void}
 */
const createFile = async (
	{ name, path },
	{ ts, cssMod, sass, withStylesFile }
) => {
	const spinner = createSpinner('...creating your files').start();

	const styleFileInfo = new StyleFile({ name, sass, cssMod });
	const styleFile = styleFileInfo.get();
	const styleImport = withStylesFile ? styleFile.fileImport : null;

	const mainFileInfo = new MainFile({ name, styleImport, ts });

	// const mainFile = await createMainFile({ ts });
	// const content = new FileContent(name, { ts, cssMod, sass });
	// const fileContent = content.get(ts);

	// /* create style file */
	// await writeFile(`${path}/${styleFile.file}`);

	// /* create create file */
	// await writeFile(`${path}/${mainFile}`, fileContent);
	// spinner.success({
	// 	text: 'done ✨'
	// });
};

module.exports = createFile;
