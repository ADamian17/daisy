const component = require('./component');

module.exports = new Map([
	['component', component],
	[
		'container',
		flags => {
			console.log(flags);
		}
	],
	[
		'template',
		flags => {
			console.log(flags);
		}
	]
]);
