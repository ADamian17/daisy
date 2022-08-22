module.exports = (userChoices = []) => {
	if (typeof userChoices === 'undefined') return;
	const userChoicesMap = new Map();
	userChoicesMap.set('task', userChoices[0]);

	return userChoicesMap;
};
