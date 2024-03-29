/* External modules */
const { format } = require('util');
const { yellow, dim, blueBright } = require('chalk');

/* Internal modules */
const { SINGLE_BR } = require('../constants');

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
				` ${item.desc},`,
				` ${dim('by default:')} ${blueBright(item.default)}`,
				SINGLE_BR
			);
		return acc;
	}, '');

	return format('%s', `Options:${SINGLE_BR}`, opts, SINGLE_BR);
};
