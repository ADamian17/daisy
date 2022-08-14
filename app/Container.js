const { mkdirSync, writeFileSync } = require('fs');
const inquirer = require('inquirer');
const BaseFile = require('./BaseFile');
const { waitForIt, toCamelCase } = require('../utils');
const { createSpinner } = require('nanospinner');

class Container extends BaseFile {
	constructor(baseDir) {
		super(baseDir);
		this.containerFileName = '';
	}

	generateStyleFile(withCssModules) {
		const file = `${this.containerFileName}.${
			!withCssModules ? 'scss' : 'module.scss'
		}`;
		const importPath = !withCssModules
			? `import "./${file}"`
			: `import * as styles from "./${file}"`;

		return {
			file,
			importPath
		};
	}

	generateFileContent(extension, stylesFilePath = '') {
		const contentOptions = {
			ts: `import React from "react";\n\n${stylesFilePath}\n\ntype ${this.containerFileName}Type = {};\n\nconst ${this.containerFileName}: React.FC<${this.containerFileName}Type> =(props) => {\n  return <div>${this.containerFileName}</div>\n}\n\nexport default ${this.containerFileName};`,
			js: `import React from "react";\n\n${stylesFilePath}\n\nconst ${this.containerFileName} = (props) => {\n  return <div>${this.containerFileName}</div>\n}\n\nexport default ${this.containerFileName};`
		};

		return contentOptions[extension];
	}

	async generateFiles(isValidPath, extension = 'ts') {
		if (!isValidPath) {
			this.containerFileName = `${this.fileName}Container`;
			mkdirSync(`${this.baseDirPath}/${this.containerFileName}`);

			const cssModulesPrompt = await inquirer.prompt({
				name: 'withModules',
				type: 'confirm',
				message: 'Do you want a css module file'
			});
			const createFileSpinner = createSpinner(
				'...creating your files'
			).start();

			const styleFileData = this.generateStyleFile(
				cssModulesPrompt.withModules
			);
			await waitForIt();
			writeFileSync(
				`${this.baseDirPath}/${this.containerFileName}/${styleFileData.file}`,
				''
			);

			writeFileSync(
				`${this.baseDirPath}/${this.containerFileName}/index.${extension}x`,
				this.generateFileContent(extension, styleFileData.importPath)
			);
			createFileSpinner.success();
			createFileSpinner.success({
				text: 'done ✨'
			});
		} else {
			console.log('\nfile already exits');
		}
	}
}

module.exports = Container;
