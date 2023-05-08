/* External modules */
const { format } = require('util');
const { yellow } = require('chalk');

/* Internal modules */
const { singleLineDivider } = require('../constants');
const isNotFirst = require('../helpers/isNotFirst');

module.exports = function setOpts(options) {
	let opts = '';

	for (const key in options) {
		const opt = options[key];

		let firstLine = isNotFirst(options, key)
			? yellow(`  --${key},`)
			: yellow(` --${key},`);

		opts =
			opts +
			format(
				'%s',
				firstLine,
				`${yellow(`-${opt.shortFlag}`)}`,
				` ${opt.desc}`,
				singleLineDivider
			);
	}

	return format(
		'%s',
		`Options:${singleLineDivider}`,
		opts,
		singleLineDivider
	);
};
