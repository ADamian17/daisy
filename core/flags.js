module.exports = {
	clear: {
		shortFlag: `c`,
		default: false,
		desc: `Clear the console`,
		type: `boolean`
	},
	version: {
		shortFlag: `v`,
		desc: `Print CLI version`,
		type: `boolean`
	},
	help: {
		shortFlag: 'h',
		default: false,
		desc: `Print daisy command line options`,
		type: `boolean`
	},
	baseDir: {
		shortFlag: 'bd',
		default: [],
		desc: `Print daisy command line options`,
		type: `string`,
		isMultiple: true
	}
};
