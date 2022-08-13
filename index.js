#!/usr/bin/env node

/**
 * daisy
 * @author Adonis D Martin <a>
 */

const { init, cli, log } = require('./utils');
const { daisy } = require('./app');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	daisy.generate(input[0]);

	debug && log(flags);
})();
