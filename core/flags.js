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
		desc: `Sets the location of the file`,
		type: `string`,
		isMultiple: true
	},
	typescript: {
		shortFlag: 'ts',
		default: false,
		desc: `Create the files with ts extension`,
		type: `boolean`
	}
};
