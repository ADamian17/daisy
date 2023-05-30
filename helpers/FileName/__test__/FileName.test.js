const FileName = require('..');

describe('toCapitalize', () => {
	it('should return Button', () => {
		expect(FileName.toCapitalize('button')).toBe('Button');
		expect(FileName.toCapitalize('Button')).toBe('Button');
		expect(FileName.toCapitalize('BUTTON')).toBe('Button');
	});
});

describe('toCamelCase', () => {
	it('should return mainButton', () => {
		expect(FileName.toCamelCase('main')).toBe('main');
		expect(FileName.toCamelCase('main button')).toBe('mainButton');
		expect(FileName.toCamelCase('Main Button')).toBe('mainButton');
		expect(FileName.toCamelCase('MAIN BUTTON')).toBe('mainButton');
	});
});

describe('toPascalCase', () => {
	it('should return MainButton', () => {
		expect(FileName.toPascalCase('main')).toBe('Main');
		expect(FileName.toPascalCase('main button')).toBe('MainButton');
		expect(FileName.toPascalCase('Main Button')).toBe('MainButton');
		expect(FileName.toPascalCase('MAIN BUTTON')).toBe('MainButton');
		expect(FileName.toPascalCase('main-button')).toBe('MainButton');
		expect(FileName.toPascalCase('mai@#$n-butt*&*on')).toBe('MainButton');
	});
});

describe('toKebabCase', () => {
	it('should return main-button', () => {
		expect(FileName.toKebabCase('main button')).toBe('main-button');
		expect(FileName.toKebabCase('Main Button')).toBe('main-button');
		expect(FileName.toKebabCase('MAIN BUTTON')).toBe('main-button');
	});
});
