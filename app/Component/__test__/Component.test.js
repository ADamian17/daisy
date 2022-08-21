const fs = require('fs');
const { mkdir } = require('../../../utils');

describe('Component', () => {
	beforeAll(async () => {
		await mkdir('src', 'components');
	});

	afterAll(() => {
		fs.rmSync('src', { recursive: true });
	});

	test('should', () => {
		expect(fs.existsSync('src/components')).toBeTruthy();
	});
});
