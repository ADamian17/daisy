module.exports = {
	clear: {
		default: false,
		desc: `Clear the console`,
		type: `boolean`
	},
	version: {
		default: false,
		desc: `Print CLI version`,
		type: `boolean`
	},
	help: {
		default: false,
		desc: `Print daisy command line options`,
		type: `boolean`
	},
	dir: {
		default: 'Not set',
		desc: `Sets the location of the file`,
		type: `string`
	},
	ts: {
		default: true,
		desc: `Create the files with ts extension`,
		type: `boolean`
	},
	cssMod: {
		default: true,
		desc: `Create the files with .module.css file extension`,
		type: `boolean`
	},
	sass: {
		default: true,
		desc: `Create the files with .scss file extension`,
		type: `boolean`
	}
};
