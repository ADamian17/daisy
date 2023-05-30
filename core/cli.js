const meow = require('meow');

const commands = require('./cli-cmds');
const flags = require('./flags');
const helpText = require('../utils/helpText');

const meowText = helpText({
	name: `daisy`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(meowText, options);
