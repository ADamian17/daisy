const fs = require('fs');
const { promisify } = require('util');
const handleWriteFile = promisify(fs.writeFile);

const writeFile = async (path, content = '') => {
	try {
		await handleWriteFile(path, content);
		return fs.existsSync(path);
	} catch (error) {
		return console.log(error);
	}
};

module.exports = writeFile;
