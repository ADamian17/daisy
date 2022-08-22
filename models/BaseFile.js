const inquirer = require('inquirer');
const { createSpinner } = require('nanospinner');

const {
	toPascalCase,
	validateNestedDirPath,
	writeFile,
	mkdir
} = require('../utils');

class BaseFile {
	constructor(baseDir) {
		this.baseDirPath = `./src/${baseDir}s`;
		this.fileExtension = 'ts';
		this.fileName = '';
		this.withGatsby = false;
	}

	async getPromptGatsby() {
		const prompt = await inquirer.prompt({
			name: 'withGatsby',
			type: 'confirm',
			message: 'Are you using Gatsby JS?'
		});

		const withGatsby = prompt.withGatsby ? true : false;
		this.withGatsby = withGatsby;

		return this.withGatsby;
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

		return prompt.imports ? `@import "${prompt.imports}";` : `@import "";`;
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

	generateFileContent(componentName, stylesFile) {}
}

module.exports = BaseFile;
