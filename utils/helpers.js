const waitForIt = (ms = 2000) => new Promise(r => setTimeout(r, ms));

const toCapitalize = str => {
	const firstLetter = str.substring(0, 1);

	const isCapital = /^[A-Z]*$/.test(firstLetter);

	if (isCapital) return str;

	return str.replace(firstLetter, firstLetter.toUpperCase());
};

const toCamelCase = str => {
	if (str.split(' ').length === 1) return toCapitalize(str);

	return str
		.split(' ')
		.map(item => toCapitalize(item))
		.join('');
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
	createUserChoiceMap
};
