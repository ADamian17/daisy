module.exports = str => {
	const res = str.toLowerCase();
	const firstLetter = res.substring(0, 1);

	return res.replace(firstLetter, firstLetter.toUpperCase());
};
