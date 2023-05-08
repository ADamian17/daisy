const { resolve } = require('path');
const commands = require('../../commands');

module.exports = function setBaseDir(target, cmd) {
	if (!target) return resolve(`src/${cmd}s`);

	if (commands.has(target.substring(0, target.length - 1))) {
		return resolve(`src/${target}`);
	}

	return resolve(`src/${cmd}s/${target}`);
};
