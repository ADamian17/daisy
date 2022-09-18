const inquirer = require('inquirer');
const { createSpinner } = require('nanospinner');
const path = require('path');

const {
	toPascalCase,
	validateNestedDirPath,
	writeFile,
	mkdir,
	log
} = require('../utils');

class BaseFile {
	constructor(baseDir) {
		this.baseDirPath = this.setBaseDirPath('src', `${baseDir}s`);
		this.fileExtension = 'ts';
		this.fileName = '';
		this.withGatsby = false;
		this.withJest = false;
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

	async getPromptJest() {
		const prompt = await inquirer.prompt({
			name: 'withJest',
			type: 'confirm',
			message: 'Are you using Jest?'
		});

		const withJest = prompt.withJest ? true : false;
		this.withJest = withJest;

		return this.withJest;
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

	setBaseDirPath(dir, target) {
		return path.resolve(dir, target);
	}

	setFileName(fileName) {
		this.fileName = toPascalCase(fileName);

		return this.fileName;
	}

	async taskInit(nestedDir) {
		if (this.baseDirPath.includes('components') && nestedDir) {
			const tempBaseDir = this.baseDirPath;
			this.baseDirPath = this.setBaseDirPath(tempBaseDir, nestedDir);
		}

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
		const withJest = await this.getPromptJest();

		if (this.baseDirPath !== 'src/templates' && withJest) {
			this.generateTestFile();
		}

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

	async generateTestFile() {
		const baseDirPath = `${this.baseDirPath}/${this.fileName}`;
		const testDirName = '__test__';

		await mkdir(baseDirPath, testDirName);

		await writeFile(
			`${baseDirPath}/${testDirName}/${this.fileName}.test.${this.fileExtension}x`,
			this.generateTestFileContent()
		);
	}

	generateFileContent(componentName, stylesFile) {}

	generateTestFileContent() {
		const temp = `import React from "react";\n\nimport { render, screen } from "@testing-library/react";\n\nimport ${this.fileName} from ".."\n\nit('should render correctly', () => {\n render(${this.fileName});\n});`;

		return temp;
	}
}

module.exports = BaseFile;
