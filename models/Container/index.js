const { toPascalCase } = require('../../utils');
const BaseFile = require('../BaseFile');

class Container extends BaseFile {
	constructor(baseDir) {
		super(baseDir);
		this.containerFileName = '';
	}

	setFileName(fileName) {
		this.fileName = `${toPascalCase(fileName)}Container`;

		return this.fileName;
	}

	generateFileContent(extension, stylesFilePath = '') {
		const contentOptions = {
			ts: `import React from "react";\n\n${stylesFilePath}\n\ntype ${this.fileName}Type = {};\n\nconst ${this.fileName}: React.FC<${this.fileName}Type> =(props) => {\n  return <div>${this.fileName}</div>\n}\n\nexport default ${this.fileName};`,
			js: `import React from "react";\n\n${stylesFilePath}\n\nconst ${this.fileName} = (props) => {\n  return <div>${this.fileName}</div>\n}\n\nexport default ${this.fileName};`
		};

		return contentOptions[extension];
	}
}

module.exports = Container;
