const userChoiceMapType = require('../../config/userChoiceMapType');

module.exports = (userChoice, isShared) => {
	if (typeof userChoice === 'undefined') return;

	const userChoicesMap = new Map();
	userChoicesMap.set(userChoiceMapType.TASK, userChoice);

	if (userChoice === 'component' && isShared) {
		userChoicesMap.set(userChoiceMapType.SHARED, 'shared');
	}

	return userChoicesMap;
};
