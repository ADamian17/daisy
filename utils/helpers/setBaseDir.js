const { resolve } = require('path');
const commands = require('../../commands');

module.exports = function setBaseDir(cmd, target) {
	const basePath = `src/${cmd}s`;
	if (target.toLowerCase() === 'not set') return resolve(basePath);

	if (commands.has(target.substring(0, target.length - 1))) {
		return resolve(basePath);
	}

	return resolve(`${basePath}/${target}`);
};
