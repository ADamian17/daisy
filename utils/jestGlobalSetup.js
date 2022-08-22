const { mkdir } = require('../utils');

module.exports = async () => {
	await mkdir('src', 'components');
	await mkdir('src', 'containers');
	await mkdir('src', 'templates');
};
