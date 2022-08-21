module.exports = (userChoices = []) => {
	if (typeof userChoices === 'undefined') return;
	const userChoicesMap = new Map();
	userChoicesMap.set('task', userChoices[0]);
	userChoicesMap.set('extension', userChoices[1]);

	return userChoicesMap;
};
