const fs = require('fs');
const Component = require('..');
const { mkdir, testSetup } = require('../../../utils');

const component = new Component('component');
const fileName = 'button';

describe('Template', () => {
	beforeAll(async () => {
		await testSetup('components');
		component.setFileName(fileName);
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/components')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(component.fileName).toBe('Button');
	});
});
