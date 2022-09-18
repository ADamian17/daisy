const mkdir = require('./mkdir');

module.exports = async dir => {
	await mkdir('src');
	await mkdir(`src/${dir}`);
};
