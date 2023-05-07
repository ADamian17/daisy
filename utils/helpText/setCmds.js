/* External modules */
const { cyan } = require('chalk');
const { format } = require('util');

/* Internal modules */
const { singleLineDivider } = require('../constants');
const isNotFirst = require('../helpers/isNotFirst');

module.exports = function setCmds(commands) {
	let cmds = '';

	for (const command in commands) {
		const cmd = commands[command];

		let firstLine = isNotFirst(commands, command)
			? cyan(`  ${command}`)
			: cyan(` ${command}`);

		cmds =
			cmds + format('%s', firstLine, ` ${cmd.desc}`, singleLineDivider);
	}

	return format(
		'%s',
		`Commands:${singleLineDivider}`,
		cmds,
		singleLineDivider
	);
};
