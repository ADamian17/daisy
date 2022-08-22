const fs = require('fs');
const { mkdir } = require('../../../utils');
const Component = require('..');

const component = new Component('component');

describe('Template', () => {
	beforeAll(async () => {
		await mkdir('src');
		await mkdir('src', 'components');
		component.setFileName('button');
	});

	afterAll(done => {
		fs.rmSync('src', { recursive: true });
		done();
	});

	test('templates dir should exists', () => {
		expect(fs.existsSync('src/components')).toBeTruthy();
	});

	it('should return home-template', () => {
		expect(component.fileName).toBe('Button');
	});
});
