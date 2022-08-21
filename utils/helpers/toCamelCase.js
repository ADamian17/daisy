const toCapitalize = require('./toCapitalize');

module.exports = str => {
	if (str.split(' ').length === 1) return str;

	return str
		.split(' ')
		.map((item, idx) => {
			if (idx <= 0) {
				return item.toLowerCase();
			}

			return toCapitalize(item);
		})
		.join('');
};
