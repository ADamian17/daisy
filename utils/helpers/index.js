module.exports = {
	createUserChoiceMap: require('./createUserChoiceMap'),
	toCamelCase: require('./toCamelCase'),
	toCapitalize: require('./toCapitalize'),
	toKebabCase: require('./toKebabCase'),
	toPascalCase: require('./toPascalCase'),
	waitForIt: require('./waitForit'),
	mkdir: require('./mkdir'),
	rm: require('./rm'),
	writeFile: require('./writeFile'),
	...require('./pathValidator')
};
