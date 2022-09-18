const fs = require('fs');
const Container = require('..');
const { testSetup } = require('../../../utils');

const container = new Container('container');
const fileName = 'home';

describe('Container', () => {
	beforeAll(async () => {
		await testSetup('containers');
		container.setFileName(fileName);
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/containers')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(container.fileName).toBe('HomeContainer');
	});
});
