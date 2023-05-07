const meow = require('meow');
const helpText = require('./helpText');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	help: {
		alias: 'h',
		default: false,
		desc: `Print daisy command line options`,
		type: `boolean`
	}
};

const commands = {
	component: {
		desc: `Creates a component inside src/components`
	},
	container: {
		desc: `Creates a container inside src/containers`
	},
	template: {
		desc: `Creates a template inside src/templates`
	}
};

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
