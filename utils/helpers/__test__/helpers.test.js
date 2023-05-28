const { toCapitalize, toCamelCase, toKebabCase, toPascalCase } = require('..');

describe('toCapitalize', () => {
	it('should return Button', () => {
		expect(toCapitalize('button')).toBe('Button');
		expect(toCapitalize('Button')).toBe('Button');
		expect(toCapitalize('BUTTON')).toBe('Button');
	});
});

describe('toCamelCase', () => {
	it('should return mainButton', () => {
		expect(toCamelCase('main')).toBe('main');
		expect(toCamelCase('main button')).toBe('mainButton');
		expect(toCamelCase('Main Button')).toBe('mainButton');
		expect(toCamelCase('MAIN BUTTON')).toBe('mainButton');
	});
});

describe('toPascalCase', () => {
	it('should return MainButton', () => {
		expect(toPascalCase('main')).toBe('Main');
		expect(toPascalCase('main button')).toBe('MainButton');
		expect(toPascalCase('Main Button')).toBe('MainButton');
		expect(toPascalCase('MAIN BUTTON')).toBe('MainButton');
		expect(toPascalCase('main-button')).toBe('MainButton');
		expect(toPascalCase('mai@#$n-butt*&*on')).toBe('MainButton');
	});
});

describe('toKebabCase', () => {
	it('should return main-button', () => {
		expect(toKebabCase('main button')).toBe('main-button');
		expect(toKebabCase('Main Button')).toBe('main-button');
		expect(toKebabCase('MAIN BUTTON')).toBe('main-button');
	});
});
