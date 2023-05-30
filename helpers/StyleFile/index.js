module.exports = class StyleFile {
	constructor({ name, cssMod, sass }) {
		this.cssMod = cssMod;
		this.sass = sass;
		this.file = `${name}${this.setCssMod()}${this.setStyleExtension()}`;
		this.fileImport = this.setImport();
	}

	setStyleExtension() {
		return this.sass ? '.scss' : '.css';
	}

	setCssMod() {
		return this.cssMod ? '.module' : '';
	}

	setImport() {
		const withCssMod = `import styles from "./${this.file}";`;
		const withoutCssMod = `import "./${this.file}";`;

		return this.cssMod ? withCssMod : withoutCssMod;
	}

	get() {
		return {
			file: this.file,
			fileImport: this.fileImport
		};
	}
};
