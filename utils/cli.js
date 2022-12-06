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
		desc: `Creates a component inside src/components/shared`,
		default: false
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
