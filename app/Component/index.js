const inquirer = require('inquirer');
const { createSpinner } = require('nanospinner');
const { mkdir, writeFile } = require('../../utils');
const BaseFile = require('../BaseFile');

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

	async generateFiles() {
		await mkdir(this.baseDirPath, this.fileName);
		await this.getPromptExtensionFile();
		const withCssModules = await this.getPromptCssModules();
		const imports = await this.getPromptCssFileContent();

		const createFileSpinner = createSpinner(
			'...creating your files'
		).start();

		const styleFileData = this.generateStyleFile(withCssModules);

		await writeFile(
			`${this.baseDirPath}/${this.fileName}/${styleFileData.file}`,
			imports
		);

		await writeFile(
			`${this.baseDirPath}/${this.fileName}/index.${this.fileExtension}x`,
			this.generateFileContent(
				this.fileExtension,
				styleFileData.importPath
			)
		);

		createFileSpinner.success();
		createFileSpinner.success({
			text: 'done ✨'
		});
	}
}

module.exports = Component;
