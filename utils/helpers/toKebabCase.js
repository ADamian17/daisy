module.exports = str => {
	if (str.split(' ').length === 1) return str;

	return str.toLowerCase().split(' ').join('-');
};
