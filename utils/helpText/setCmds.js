/* External modules */
const { cyan } = require('chalk');
const { format } = require('util');

/* Internal modules */
const { SINGLE_BR } = require('../constants');
const isNotFirst = require('../helpers/isNotFirst');

module.exports = function setCmds(commands) {
	let cmds = '';

	for (const command in commands) {
		const cmd = commands[command];

		let firstLine = isNotFirst(commands, command)
			? cyan(`  ${command}`)
			: cyan(` ${command}`);

		cmds = cmds + format('%s', firstLine, ` ${cmd.desc}`, SINGLE_BR);
	}

	return format('%s', `Commands:${SINGLE_BR}`, cmds, SINGLE_BR);
};
