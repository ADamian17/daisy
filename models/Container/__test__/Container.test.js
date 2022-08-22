const fs = require('fs');
const { mkdir } = require('../../../utils');
const Container = require('..');

const container = new Container('container');

describe('Container', () => {
	beforeAll(async () => {
		await mkdir('src');
		await mkdir('src', 'containers');
		container.setFileName('home');
	});

	afterAll(done => {
		fs.rmSync('src', { recursive: true });
		done();
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/containers')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(container.fileName).toBe('HomeContainer');
	});
});
