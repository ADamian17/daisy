/* External modules */
const { format } = require('util');
const { yellow, cyan, gray, green } = require('chalk');

/* Internal modules */
const { singleLineDivider, doubleLineDivider } = require('../constants');
const setCmds = require('./setCmds');
const setOpts = require('./setOpts');

module.exports = function helpText({
	name = `(CLI name undefined)`,
	commands = {},
	flags = {}
}) {
	const usageStr = format(
		'%s',
		gray(' $'),
		green(name),
		cyan('<command>'),
		yellow('[option]'),
		doubleLineDivider
	);

	const exampleStr = format(
		'%s',
		gray('$'),
		green(name),
		cyan('component'),
		yellow('--ts'),
		`"This command will generate a component with ts file extension"`
	);

	const COMMANDS = setCmds(commands);
	const EXAMPLE = format('%s', 'Example:', singleLineDivider, exampleStr);
	const FLAGS = setOpts(flags);
	const USAGE = format('%s', 'Usage:', singleLineDivider, usageStr);

	return `${USAGE}${COMMANDS}${FLAGS}${EXAMPLE}`;
};
