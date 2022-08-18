const { promisify } = require('util');
const fs = require('fs');
const { createSpinner } = require('nanospinner');

const { toPascalCase } = require('../../utils');
const BaseFile = require('../BaseFile');

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

class Template extends BaseFile {
	constructor(baseDir) {
		super(baseDir);
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

	async generateFiles(isValidPath, extension = 'ts') {
		if (!isValidPath) {
			await mkdir(`${this.baseDirPath}/${this.fileName}`);

			const createFileSpinner = createSpinner(
				'...creating your files'
			).start();

			await writeFile(
				`${this.baseDirPath}/${this.fileName}/index.${extension}x`,
				this.generateFileContent(extension)
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

module.exports = Template;
