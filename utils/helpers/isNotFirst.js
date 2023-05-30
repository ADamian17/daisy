module.exports = function isNotFirst(items, item) {
	let idx = 0;

	if (Array.isArray(items)) {
		idx = items.indexOf(item);
	}

	idx = Object.keys(items).indexOf(item);

	return idx > 0;
};
