const meow = require('meow');
const meowHelp = require('cli-meow-help');

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
	shared: {
		type: `boolean`,
		alias: 's',
		desc: `Checks for the shared directory inside components dir and creates a component`,
		default: false
	}
};

const commands = {
	component: {
		desc: `Checks for the components directory and creates a component`
	},
	container: {
		desc: `Checks for the containers directory and creates a container`
	},
	template: {
		desc: `Checks for the templates directory and creates a template`
	},
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
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

module.exports = meow(helpText, options);
