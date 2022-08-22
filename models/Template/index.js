const { createSpinner } = require('nanospinner');
const { toPascalCase, toKebabCase, mkdir, writeFile } = require('../../utils');
const BaseFile = require('../BaseFile');

class Template extends BaseFile {
	constructor(baseDir) {
		super(baseDir);
	}

	setFileName(fileName) {
		this.fileName = `${toKebabCase(fileName)}-template`;

		return this.fileName;
	}

	generateFileContent(extension) {
		const fileName = toPascalCase(this.fileName);

		const gatsbyImportsOpts = {
			ts: `\n\nimport { graphql, PageProps } from "gatsby";`,
			js: `\n\nimport { graphql } from "gatsby";`
		};

		const gatsbyImports = this.withGatsby
			? gatsbyImportsOpts[extension]
			: '';

		const gatsbyTypes = this.withGatsby
			? `PageProps<${fileName}Type>`
			: `${fileName}Type`;

		const query =
			'graphql`\n  query PageQuery($id: String!) {\n    wpPage(id: {eq: $id}){\n }\n}\n`';

		const gatsbyPageQuery = this.withGatsby
			? `\n\nexport const query = ${query}`
			: '';

		const contentOptions = {
			ts: `import React from "react";${gatsbyImports}\n\ntype ${fileName}Type = {};\n\nconst ${fileName}: React.FC<${gatsbyTypes}> =(props) => {\n  return <div>${fileName}</div>\n}\n\nexport default ${fileName};${gatsbyPageQuery}`,
			js: `import React from "react";${gatsbyImports}\n\nconst ${fileName} = (props) => {\n  return <div>${fileName}</div>\n}\n\nexport default ${fileName};${gatsbyPageQuery}`
		};

		return contentOptions[extension];
	}

	async generateFiles() {
		await mkdir(this.baseDirPath, this.fileName);
		await this.getPromptExtensionFile();
		await this.getPromptGatsby();

		const createFileSpinner = createSpinner(
			'...creating your files'
		).start();

		await writeFile(
			`${this.baseDirPath}/${this.fileName}/index.${this.fileExtension}x`,
			this.generateFileContent(this.fileExtension)
		);

		createFileSpinner.success();
		createFileSpinner.success({
			text: 'done ✨'
		});
	}
}

module.exports = Template;
