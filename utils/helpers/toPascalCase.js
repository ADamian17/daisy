const toCapitalize = require('./toCapitalize');

module.exports = str => {
	const s = str.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	const containsSpecialCharacters = s.includes('-');
	const formatedStr = containsSpecialCharacters
		? s.replaceAll('-', ' ')
		: str;

	if (formatedStr.split(' ').length === 1) return toCapitalize(str);

	return formatedStr
		.split(' ')
		.map(item => toCapitalize(item))
		.join('');
};
