#!/usr/bin/env node

/**
 * daisy
 * @author Adonis D Martin <a>
 */

const { init, cli, log } = require('./utils');
const { daisy } = require('./app');

const commands = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });
	console.log('help', flags.help);
	flags.help && cli.showHelp(0);
	const cmd = commands.at(0);

	if (!cmd) {
		return console.log('Please run `daisy help` to see all option');
	}

	console.log({ cmd });
	// daisy.generate(userChoice[0], cli.flags);
})();
