module.exports = {
	clear: {
		default: false,
		desc: `Clear the console`,
		type: `boolean`
	},
	v: {
		desc: `Print CLI version`,
		type: `boolean`
	},
	help: {
		default: false,
		desc: `Print daisy command line options`,
		type: `boolean`
	},
	dir: {
		default: '',
		desc: `Sets the location of the file`,
		type: `string`
	},
	ts: {
		default: false,
		desc: `Create the files with ts extension`,
		type: `boolean`
	}
};
