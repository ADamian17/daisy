module.exports = (userChoices = []) => {
	if (typeof userChoices === 'undefined') return;
	const userChoicesMap = new Map();
	userChoicesMap.set('task', userChoices[0]);

	const isSharedComponent =
		userChoices[0] === 'component' && userChoices[1] === 'shared';
	const nestedDir = isSharedComponent ? userChoices[1] : null;
	userChoicesMap.set('nested-dir', nestedDir);

	return userChoicesMap;
};
