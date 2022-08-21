const fs = require('fs');
const Component = require('..');

const component = new Component('component');

describe('Template', () => {
	beforeAll(() => {
		component.setFileName('button');
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/components')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(component.fileName).toBe('Button');
	});
});
