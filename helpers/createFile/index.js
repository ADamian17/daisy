const { createSpinner } = require('nanospinner');

const createMainFile = require('../createMainFile');
const createStyleFile = require('../createStyleFile');
const writeFile = require('../writeFile');

/**
 * @method init
 * @param {string} file - Path where we want to create the file
 * @param {Object} flags - Represent available options in our application
 * @param {string} flags.ts - If is set to true create file with .ts extension
 * @param {string} flags.cssMod - If is set to true create file with .module.css or .module.scss extension
 * @param {string} flags.sass - If is set to true create file with .scss extension
 * @return {void}
 */
const createFile = async ({ name, path, content }, { ts, cssMod, sass }) => {
	const createFileSpinner = createSpinner('...creating your files').start();
	const styleFile = await createStyleFile({ name, sass, cssMod });
	const mainFile = await createMainFile({ ts });

	/* create style file */
	await writeFile(`${path}/${styleFile}`);

	/* create create file */
	await writeFile(`${path}/${mainFile}`, content);

	createFileSpinner.success();
	createFileSpinner.success({
		text: 'done ✨'
	});
};

module.exports = createFile;

// async generateFiles() {

//   const styleFileData = this.generateStyleFile(withCssModules);

//   await writeFile(
//     `${this.baseDirPath}/${this.fileName}/index.${this.fileExtension}x`,
//     this.generateFileContent(
//       this.fileExtension,
//       styleFileData.importPath
//     )
//   );

//   if (this.baseDirPath !== 'src/templates' && withStorybook) {
//     await writeFile(
//       `${this.baseDirPath}/${this.fileName}/${this.fileName}.stories.${this.fileExtension}x`,
//       this.generateStorybookFileContent(this.fileExtension)
//     );
//   }

// }
