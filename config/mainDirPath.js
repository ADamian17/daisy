const { Component, Container, Template } = require('../models');

module.exports = new Map([
	['component', new Component('component')],
	['container', new Container('container')],
	['template', new Template('template')]
]);
