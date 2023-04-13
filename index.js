#!/usr/bin/env node

/**
 * daisy
 * @author Adonis D Martin <a>
 */

const { init, cli, log } = require('./utils');
const { daisy } = require('./app');

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	const userChoice = input.length === 0 ? null : input;

	if (!userChoice) {
		return console.log('Please run `daisy help` to see all option');
	}

	log({ flags });
	// daisy.generate(userChoice[0], cli.flags);
})();
