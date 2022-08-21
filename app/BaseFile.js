const inquirer = require('inquirer');
const { Subject } = require('rxjs');
const prompts = new Subject();
inquirer.prompt(prompts);

const { toPascalCase } = require('../utils');
const { validateNestedDirPath } = require('./pathValidator');

class BaseFile {
	constructor(baseDir) {
		this.baseDirPath = `./src/${baseDir}s`;
		this.fileExtension = 'ts';
		this.fileName = '';
	}

	async getPromptCssModules() {
		const prompt = await inquirer.prompt({
			name: 'withCssModules',
			type: 'confirm',
			message: 'Are you using css modules?'
		});

		return prompt.withCssModules;
	}

	async getPromptCssFileContent() {
		const prompt = await inquirer.prompt({
			name: 'imports',
			type: 'input',
			message: 'Enter the path of css imports'
		});

		return prompt.imports ? `@import "${prompt.imports}";` : `@import "":`;
	}

	async getPromptExtensionFile() {
		const prompt = await inquirer.prompt({
			name: 'extension',
			type: 'confirm',
			message: 'Are you using Typescript?'
		});

		const extension = prompt.extension ? this.fileExtension : 'js';
		this.fileExtension = extension;

		return this.fileExtension;
	}

	async getPromptFileName() {
		const prompt = await inquirer.prompt({
			name: 'fileName',
			type: 'input',
			message: 'Enter file name'
		});

		return prompt.fileName;
	}

	setFileName(fileName) {
		this.fileName = toPascalCase(fileName);

		return this.fileName;
	}

	async taskInit() {
		const fileName = await this.getPromptFileName();
		this.setFileName(fileName);
		const isValidPath = await this.validateFilePath(this.fileName);

		if (isValidPath) return console.log('\nfile already exits');

		await this.generateFiles();
	}

	async validateFilePath() {
		return await validateNestedDirPath(
			`${this.baseDirPath}/${this.fileName}`
		);
	}

	generateFileContent(componentName, stylesFile) {}
	generateFiles(extension) {}
}

module.exports = BaseFile;
