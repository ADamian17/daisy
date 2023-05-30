/* External modules */
const { format } = require('util');
const { yellow, cyan, gray, green } = require('chalk');

/* Internal modules */
const setCmds = require('./setCmds');
const setOpts = require('./setOpts');
const { DOUBLE_BR, SINGLE_BR } = require('../constants');

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
		DOUBLE_BR
	);

	const exampleOne = format(
		'%s',
		gray('$'),
		green(name),
		cyan('component'),
		yellow('--ts'),
		`"This command will generate a component with ts file extension"`
	);

	const exampleTwo = format(
		'%s',
		gray('$'),
		green(name),
		cyan('component'),
		yellow('--sass=false'),
		`"This command will disable the creation of files extension with scss"`
	);

	const examples = `${exampleOne}${SINGLE_BR}${exampleTwo}`;

	const COMMANDS = setCmds(commands);
	const EXAMPLE = format('%s', 'Example:', SINGLE_BR, examples);
	const FLAGS = setOpts(flags);
	const USAGE = format('%s', 'Usage:', SINGLE_BR, usageStr);

	return `${USAGE}${COMMANDS}${FLAGS}${EXAMPLE}`;
};
