const inquirer = require('inquirer');
const setFilename = require('./setFilename');
const { validateBaseDirPath, validateFilePath } = require('../utils');
const createDirectory = require('./createDirectory');
const createFile = require('./createFile');

module.exports = class Command {
	constructor() {
		this.basePath = '';
		this.fileName = '';
	}
	/**
	 * @method setBasePath
	 * @param {string} path - Sets basePath in the class
	 */
	#setBasePath(path) {
		if (!path) throw new Error('Path is missing');

		this.basePath = path;
	}

	async #getFileName(cmd) {
		const prompt = await inquirer.prompt({
			name: 'fileName',
			type: 'input',
			message: 'Enter file name'
		});

		this.fileName = setFilename(prompt.fileName, cmd);
	}

	/**
	 * @method init
	 * @param {string} path - Path where we want to create the file
	 * @param {Object} flags - Represent available options in our application
	 * @param {string} flags.ts - If is set to true create file with .ts extension
	 * @param {string} flags.cssMod - If is set to true create file with .module.css or .module.scss extension
	 * @param {string} flags.sass - If is set to true create file with .scss extension
	 * @return {void}
	 */
	async init({ cmd, path, flags }) {
		try {
			const { cssMod, ts, sass } = flags;
			await this.#getFileName(cmd);
			this.#setBasePath(`${path}/${this.fileName}`);

			/* creating directory */
			const dirExists = await createDirectory(this.basePath);
			if (dirExists) {
				const file = {
					name: this.fileName,
					path: this.basePath,
					content: `console.log("hello world")`
				};

				const fileOpts = {
					cssMod,
					ts,
					sass
				};

				await createFile(file, fileOpts);
			}
		} catch (error) {
			process.exit(0);
		}
	}
};
