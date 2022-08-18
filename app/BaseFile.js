const { toCamelCase, toPascalCase, toKebabCase } = require('../utils');

class BaseFile {
	constructor(baseDir) {
		this.fileName = '';
		this.baseDirPath = `./src/${baseDir}s`;
	}

	setFileName(fileName) {
		this.fileName = this.baseDirPath.includes(`templates`)
			? `${toKebabCase(fileName)}-template`
			: toPascalCase(fileName);

		return this.fileName;
	}

	generateFileContent(componentName, stylesFile) {}

	generateFiles(isValidPath, extension) {}
}

module.exports = BaseFile;
