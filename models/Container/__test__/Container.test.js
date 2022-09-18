const fs = require('fs');
const Container = require('..');

const container = new Container('container');
const fileName = 'home';
const basePath = 'src/containers';

describe('Container', () => {
	beforeAll(async () => {
		container.setFileName(fileName);
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/containers')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(container.fileName).toBe('HomeContainer');
	});
});
