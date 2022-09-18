const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	component: {
		type: `string`,
		default: 'ts',
		alias: 'comp',
		desc: `Checks for the components directory and creates a component`
	},
	container: {
		type: `string`,
		default: 'ts',
		alias: 'cont',
		desc: `Checks for the containers directory and creates a container`
	},
	template: {
		type: `string`,
		default: 'ts',
		alias: 'temp',
		desc: `Checks for the templates directory and creates a template`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `daisy-cli`,
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
