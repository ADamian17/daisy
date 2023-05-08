const { resolve } = require('path');
module.exports = function setBaseDir(prompt, cmd) {
	return prompt.length > 0
		? resolve(`src/${cmd}s/${prompt.at(0)}`)
		: resolve(`src/${cmd}s`);
};
