const setFilename = require('..');

describe('setFilename', () => {
	it('should return Button when cmd component is pass', () => {
		expect(setFilename('button', 'component')).toBe('Button');
	});

	it('should return ButtonContainer when cmd container is pass', () => {
		expect(setFilename('button', 'container')).toBe('ButtonContainer');
		expect(setFilename('button container', 'container')).toBe(
			'ButtonContainer'
		);
	});

	it('should return ButtonPrimaryContainer when cmd container is pass', () => {
		expect(setFilename('button container primary', 'container')).toBe(
			'ButtonPrimaryContainer'
		);
		expect(
			setFilename('button container primary container', 'container')
		).toBe('ButtonPrimaryContainer');
	});

	it('should return button-template when cmd template is pass', () => {
		expect(setFilename('button', 'template')).toBe('button-template');
		expect(setFilename('button template', 'template')).toBe(
			'button-template'
		);
	});

	it('should return home-button-template when cmd template is pass', () => {
		expect(setFilename('home template button', 'template')).toBe(
			'home-button-template'
		);
		expect(setFilename('home template button template', 'template')).toBe(
			'home-button-template'
		);
	});
});
