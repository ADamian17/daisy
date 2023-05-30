const FileName = require('../FileName');

/**
 * @method setFilename
 * @param {string} str
 * @return {string} - ``e.g: TodosContainer``
 */
const setFilenameContainer = str => {
	str = str
		.toLocaleLowerCase()
		.replace(/container/gi, '')
		.trim();

	return `${FileName.toPascalCase(str)}Container`;
};

const setFilenameTemplate = str => {
	str = str
		.toLocaleLowerCase()
		.replace(/template/gi, '')
		.split('  ')
		.join(' ')
		.trim();

	return `${FileName.toKebabCase(str)}-template`;
};

/**
 * @method setFilename
 * @param {string} filename - Path where we want to create the file
 * @param {'template' | 'component' | 'container' | 'hook'} [cmd]
 * @return {void}
 */
module.exports = function setFilename(filename, cmd = 'component') {
	switch (cmd) {
		case 'container':
			return setFilenameContainer(filename);

		case 'template':
			return setFilenameTemplate(filename);

		default:
			return FileName.toPascalCase(filename);
	}
};
