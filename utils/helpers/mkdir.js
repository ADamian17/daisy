const fs = require('fs');
const { promisify } = require('util');
const mkdir = promisify(fs.mkdir);

module.exports = async (base, nestedDir) => {
	try {
		if (!base) throw 'missing-base';
		if (!nestedDir) throw 'missing-nestedDir';

		if (!fs.existsSync(base)) {
			await mkdir(base);
		}

		if (fs.existsSync(base) && !fs.existsSync(nestedDir)) {
			await mkdir(`${base}/${nestedDir}`);
		}

		return fs.existsSync(`${base}/${nestedDir}`);
	} catch (error) {
		switch (error) {
			case 'missing-base':
				return console.log('arg at position 1 can not undefined');
			case 'missing-nestedDir':
				return console.log('arg at position 2 can not undefined');
			case 'missing-base':
			case 'missing-nestedDir':
				return console.log('args can not undefined');
			default:
				return console.log(error);
		}
	}
};
