const Component = require('./Component');
const Container = require('./Container');
const Template = require('./Template');

module.exports = new Map([
	['component', new Component('component')],
	['container', new Container('container')],
	['template', new Template('template')]
]);
