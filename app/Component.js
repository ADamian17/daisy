const { mkdirSync, writeFileSync } = require('fs');
const inquirer = require('inquirer');
const welcome = require('cli-welcome');
const BaseFile = require('./BaseFile');
const { waitForIt } = require('../utils');
const { createSpinner } = require('nanospinner');

class Component extends BaseFile {
	constructor(baseDir) {
		super(baseDir);
	}

	generateStyleFile(withCssModules) {
		const file = `${this.fileName}.${
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
			ts: `import React from "react";\n\n${stylesFilePath}\n\ntype ${this.fileName}Type = {};\n\nconst ${this.fileName}: React.FC<${this.fileName}Type> =(props) => {\n  return <div>${this.fileName}</div>\n}\n\nexport default ${this.fileName};`,
			js: `import React from "react";\n\n${stylesFilePath}\n\nconst ${this.fileName} = (props) => {\n  return <div>${this.fileName}</div>\n}\n\nexport default ${this.fileName};`
		};

		return contentOptions[extension];
	}

	async generateFiles(isValidPath, extension = 'js') {
		if (!isValidPath) {
			mkdirSync(`${this.baseDirPath}/${this.fileName}`);

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
				`${this.baseDirPath}/${this.fileName}/${styleFileData.file}`,
				''
			);

			writeFileSync(
				`${this.baseDirPath}/${this.fileName}/index.${extension}x`,
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

module.exports = Component;
