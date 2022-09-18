const fs = require('fs');
const Template = require('..');
const { testSetup } = require('../../../utils');

const template = new Template('template');
let fileName;

describe('Template', () => {
	beforeAll(async () => {
		await testSetup('templates');
		fileName = template.setFileName('home');
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/templates')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(template.fileName).toBe('home-template');
	});
});
