/* External modules */
const { format } = require('util');
const { yellow } = require('chalk');

/* Internal modules */
const { singleLineDivider } = require('../constants');
const isNotFirst = require('../helpers/isNotFirst');

module.exports = function setOpts(options) {
	const sortedOpts = Object.keys(options).sort();
	const opts = sortedOpts.reduce((acc, opt, idx) => {
		const item = options[opt];

		let firstLine = idx > 0 ? yellow(`  --${opt},`) : yellow(` --${opt},`);

		acc =
			acc +
			format(
				'%s',
				firstLine,
				`${yellow(`-${item.shortFlag}`)}`,
				` ${item.desc}`,
				singleLineDivider
			);
		return acc;
	}, '');

	return format(
		'%s',
		`Options:${singleLineDivider}`,
		opts,
		singleLineDivider
	);
};
