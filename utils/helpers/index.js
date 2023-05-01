module.exports = {
	createUserChoiceMap: require('./createUserChoiceMap'),
	mkdir: require('./mkdir'),
	rm: require('./rm'),
	testSetup: require('./testSetup'),
	toCamelCase: require('./toCamelCase'),
	toCapitalize: require('./toCapitalize'),
	toKebabCase: require('./toKebabCase'),
	toPascalCase: require('./toPascalCase'),
	waitForIt: require('./waitForIt'),
	writeFile: require('./writeFile'),
	...require('./pathValidator')
};
