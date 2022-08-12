const waitForIt = (ms = 2000) => new Promise(r => setTimeout(r, ms));

const toCapitalize = str => {
	const firstLetter = str.substring(0, 1);

	const isCapital = /^[A-Z]*$/.test(firstLetter);

	if (isCapital) return str;

	return str.replace(firstLetter, firstLetter.toUpperCase());
};

module.exports = {
	waitForIt,
	toCapitalize
};
