const { mkdirSync, writeFileSync } = require('fs');
const inquirer = require('inquirer');
const BaseFile = require('./BaseFile');

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

	generateFileContent(stylesFilePath = '') {
		return `
    import React from "react";
    ${stylesFilePath}

    type ${this.fileName}Type = {};

    const ${this.fileName}: React.FC<${this.fileName}Type> = (props) => {
      return <div>${this.fileName}</div>
    }

    export default ${this.fileName};
    `;
	}

	async generateFiles(isValidPath, extension = 'ts') {
		if (!isValidPath) {
			mkdirSync(`${this.baseDirPath}/${this.fileName}`);

			const cssModulesPrompt = await inquirer.prompt({
				name: 'withModules',
				type: 'confirm',
				message: 'Do you want a css module file'
			});

			const styleFileData = this.generateStyleFile(
				cssModulesPrompt.withModules
			);

			writeFileSync(
				`${this.baseDirPath}/${this.fileName}/${styleFileData.file}`,
				''
			);

			writeFileSync(
				`${this.baseDirPath}/${this.fileName}/index.${extension}x`,
				this.generateFileContent(styleFileData.importPath)
			);
		} else {
			console.log('\nfile already exits');
		}
	}
}

module.exports = Component;
