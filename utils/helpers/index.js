const waitForIt = (ms = 2000) => new Promise(r => setTimeout(r, ms));

const toCapitalize = str => {
	const res = str.toLowerCase();
	const firstLetter = res.substring(0, 1);

	return res.replace(firstLetter, firstLetter.toUpperCase());
};

const toCamelCase = str => {
	if (str.split(' ').length === 1) return toCapitalize(str);

	return str
		.split(' ')
		.map(item => toCapitalize(item))
		.join('');
};

const toKebabCase = str => {
	if (str.split(' ').length === 1) return str;

	return str.toLowerCase().split(' ').join('-');
};

const createUserChoiceMap = (userChoices = []) => {
	if (typeof userChoices === 'undefined') return;
	const userChoicesMap = new Map();
	userChoicesMap.set('task', userChoices[0]);
	userChoicesMap.set('extension', userChoices[1]);

	return userChoicesMap;
};

module.exports = {
	waitForIt,
	toCapitalize,
	toCamelCase,
	toKebabCase,
	createUserChoiceMap
};
