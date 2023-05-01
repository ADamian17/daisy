module.exports = {
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
