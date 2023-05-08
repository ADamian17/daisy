const { resolve } = require('path');
const commands = require('../../commands');

module.exports = function setBaseDir(prompt, cmd) {
	if (prompt.length <= 0) return resolve(`src/${cmd}s`);

	const target = prompt.at(0);

	if (commands.has(target.substring(0, target.length - 1))) {
		return resolve(`src/${target}`);
	}

	return resolve(`src/${cmd}s/${target}`);
};
