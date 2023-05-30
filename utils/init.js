const welcome = require('cli-welcome');
const pkg = require('./../package.json');

module.exports = ({ clear = true }) => {
	welcome({
		title: `daisy`,
		tagLine: `by Adonis D Martin`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
