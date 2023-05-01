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
	},
	typescript: {
		type: `boolean`,
		alias: 'ts',
		desc: `Adds configuration for typescript`,
		default: false
	},
	cssModules: {
		type: `boolean`,
		alias: 'cssmod',
		desc: `Adds configuration for css modules`,
		default: false
	},
	storyBook: {
		type: `boolean`,
		alias: 'sb',
		desc: `Adds configuration for story-book`,
		default: false
	},
	testingLibrary: {
		type: `boolean`,
		alias: 'tstlib',
		desc: `Adds configuration for @testing-library`,
		default: false
	},
	rootDir: {
		type: `string`,
		alias: 'rd',
		desc: `Creates the file in the target location, e.g (src/component/UI/Btn)`,
		isMultiple: true
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
