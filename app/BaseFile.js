const { toCamelCase } = require('../utils');

class BaseFile {
	constructor(baseDir) {
		this.fileName = '';
		this.baseDirPath = `./src/${baseDir}s`;
	}

	setFileName(fileName) {
		this.fileName = toCamelCase(fileName);

		return this.fileName;
	}

	generateFileContent(componentName, stylesFile) {}

	generateFiles(isValidPath, extension) {}
}

module.exports = BaseFile;
