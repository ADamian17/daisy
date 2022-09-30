const inquirer = require('inquirer');
const { createSpinner } = require('nanospinner');
const path = require('path');

const {
	toPascalCase,
	validateNestedDirPath,
	writeFile,
	mkdir
} = require('../utils');

class BaseFile {
	constructor(baseDir) {
		this.baseDirPath = this.setBaseDirPath('src', `${baseDir}s`);
		this.fileExtension = 'ts';
		this.fileName = '';
		this.withCssModules = false;
		this.withGatsby = false;
		this.withJest = false;
		this.withStorybook = false;
	}

	async getConfirmation(target) {
		const prompt = await inquirer.prompt({
			name: target,
			type: 'confirm',
			message: `Are you using ${target.substring(4)}?`
		});

		const temp = prompt[target] ? true : false;
		this[target] = temp;

		return this[target];
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
			: `import styles from "./${file}"`;

		return {
			file,
			importPath
		};
	}

	async generateFiles() {
		await mkdir(this.baseDirPath, this.fileName);
		await this.getPromptExtensionFile();
		const withCssModules = await this.getConfirmation('withCssModules');
		const imports = await this.getPromptCssFileContent();
		const withJest = await this.getConfirmation('withJest');
		const withStorybook = await this.getConfirmation('withStorybook');

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

		if (this.baseDirPath !== 'src/templates' && withStorybook) {
			await writeFile(
				`${this.baseDirPath}/${this.fileName}/${this.fileName}.stories.${this.fileExtension}x`,
				this.generateStorybookFileContent(this.fileExtension)
			);
		}

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

	generateTestFileContent() {
		const temp = `import React from "react";\n\nimport { render, screen } from "@testing-library/react";\n\nimport ${this.fileName} from ".."\n\nit('should render correctly', () => {\n render(${this.fileName});\n});`;

		return temp;
	}

	generateStorybookFileContent(extension) {
		const component = this.fileName;

		const fileContent = {
			js: `import React from "react";\n\nimport ${component} from '.';\n\nexport default {\n component: ${component}\n};\n\nconst Template = (args) => <${component} {...args} />;\n\n\nexport const Default = Template.bind({});\n\nDefault.args = {/* set you component props */};`,
			ts: `import React from "react";\n\nimport { ComponentStory, ComponentMeta } from "@storybook/react";\n\nimport ${component}, {${component}Type} from '.';\n\nexport default {\n component: ${component}\n} as ComponentMeta<typeof ${component}>;\n\nconst Template: ComponentStory<typeof ${component}> = (args) => <${component} {...args} />;\n\n\nexport const Default = Template.bind({});\n\nDefault.args = {/* set you component props */};`
		};

		return fileContent[extension];
	}

	generateFileContent(componentName, stylesFile) {}
}

module.exports = BaseFile;
