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
		const query =
			'graphql`\n  query PageQuery($id: String!) {\n    wpPage(id: {eq: $id}){\n }\n}\n`';

		const contentOptions = {
			ts: `import React from "react";\n\nimport {graphql, PageProps} from "gatsby";\n\ntype ${fileName}Type = {};\n\nconst ${fileName}: React.FC<PageProps<${fileName}Type>> =(props) => {\n  return <div>${fileName}</div>\n}\n\nexport default ${fileName};\n\nexport const query = ${query}`,
			js: `import React from "react";\n\nimport {graphql} from "gatsby"\n\nconst ${fileName} = (props) => {\n  return <div>${fileName}</div>\n}\n\nexport default ${fileName};\n\nexport const query = ${query}`
		};

		return contentOptions[extension];
	}

	async generateFiles() {
		await mkdir(this.baseDirPath, this.fileName);
		await this.getPromptExtensionFile();

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
