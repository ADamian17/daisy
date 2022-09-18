const fs = require('fs');
const Template = require('..');

const template = new Template('template');
let fileName;
const basePath = 'src/templates';

describe('Template', () => {
	beforeAll(async () => {
		fileName = template.setFileName('home');
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/templates')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(template.fileName).toBe('home-template');
	});
});
