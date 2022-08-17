const { toCapitalize, toCamelCase, toKebabCase } = require('..');

describe('toCapitalize', () => {
	it('should return Button', () => {
		expect(toCapitalize('button')).toBe('Button');
		expect(toCapitalize('Button')).toBe('Button');
		expect(toCapitalize('BUTTON')).toBe('Button');
	});
});

describe('toCamelCase', () => {
	it('should return MainButton', () => {
		expect(toCamelCase('main button')).toBe('MainButton');
		expect(toCamelCase('Main Button')).toBe('MainButton');
		expect(toCamelCase('MAIN BUTTON')).toBe('MainButton');
	});
});

describe('toKebabCase', () => {
	it('should return main-button', () => {
		expect(toKebabCase('main button')).toBe('main-button');
		expect(toKebabCase('Main Button')).toBe('main-button');
		expect(toKebabCase('MAIN BUTTON')).toBe('main-button');
	});
});
