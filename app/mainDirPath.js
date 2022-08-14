const Component = require('./Component');
const Container = require('./Container');

module.exports = new Map([
	['component', new Component('component')],
	['container', new Container('container')]
	// ['template', './src/templates'],
]);
