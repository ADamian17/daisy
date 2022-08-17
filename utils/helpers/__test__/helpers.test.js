const { toCapitalize, toCamelCase } = require('..');

describe('toCapitalize', () => {
	it('should return Button', () => {
		expect(toCapitalize('button')).toBe('Button');
		expect(toCapitalize('Button')).toBe('Button');
		expect(toCapitalize('BUTTON')).toBe('Button');
	});
});
