const fs = require('fs');
const Template = require('..');

const template = new Template('template');

describe('Template', () => {
	// beforeAll(() => {
	// 	fs.mkdirSync('src');
	// 	fs.mkdirSync('src/templates');
	// 	template.setFileName('home');
	// });

	// afterAll(done => {
	// 	fs.rmSync('src', { recursive: true });
	// 	done();
	// });

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/templates')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(template.fileName).toBe('home-template');
	});
});
