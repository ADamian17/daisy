#!/usr/bin/env node

/**
 * daisy
 * @author Adonis D Martin <a>
 */

const { init, cli } = require('./utils');
const { daisy } = require('./app');

const command = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });
	flags.help && cli.showHelp(0);

	const cmd = command.at(0);

	if (!cmd) {
		return console.log('Please run `daisy --help` to see all option');
	}

	// daisy.generate(userChoice[0], cli.flags);
})();
