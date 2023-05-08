#!/usr/bin/env node

/**
 * daisy
 * @author Adonis D Martin <a>
 */

const { init } = require('./utils');
const cli = require('./core/cli');
const generate = require('./core/generate');

const command = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });
	flags.help && cli.showHelp(2);

	const cmd = command.at(0);

	if (!cmd) {
		return console.log('Please run `daisy --help` to see all option');
	}

	generate(cmd, cli.flags);
})();
