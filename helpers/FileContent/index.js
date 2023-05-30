const { DOUBLE_BR, SINGLE_BR } = require('../../utils/constants');
const FileName = require('../FileName');

const fcHeadTs = (_, name) => {
	const nameType = `${name}Type`;
	return `type ${nameType} = {};${DOUBLE_BR}const ${name}: React.FC<${nameType}> = `;
};

const fcBody = (_, name) => {
	return `(props) => {${SINGLE_BR} return <div>${name}</div>${SINGLE_BR}};${DOUBLE_BR}export default ${name};`;
};

class FileContent {
	constructor({ name, styleImport, ts }) {
		this.name = FileName.toPascalCase(name);
		this.ts = ts;
		this.firstLine = `import React from "react";`;
		this.secondLine = this.setStyleImport(styleImport);
		this.lastLine = this.setFunctionStructure();
	}

	setStyleImport(styleImport) {
		return styleImport
			? `${DOUBLE_BR}${styleImport}${DOUBLE_BR}`
			: DOUBLE_BR;
	}

	setFunctionStructure() {
		let functionHead = this.ts
			? fcHeadTs`${this.name}`
			: `const ${this.name} = `;

		return `${functionHead}${fcBody`${this.name}`}`;
	}

	/**
	 * @param {boolean} ts
	 * @returns {string}
	 */
	get() {
		return `${this.firstLine}${this.secondLine}${this.lastLine}`;
	}
}

module.exports = FileContent;
