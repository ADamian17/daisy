const FileContent = require('../FileContent');

module.exports = class MainFile {
	constructor({ name, styleImport, ts }) {
		this.file = this.seFileExtension(ts);
		this.fileContent = this.seFileContent({ name, styleImport, ts });
	}

	seFileExtension(ts) {
		const fileExtension = ts ? '.tsx' : '.jsx';
		return `index${fileExtension}`;
	}

	seFileContent({ name, styleImport, ts }) {
		const fileContent = new FileContent({ name, styleImport, ts });
		return fileContent.get();
	}

	get = () => ({
		file: this.file,
		fileContent: this.fileContent
	});
};
