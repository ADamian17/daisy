const StyleFile = require('..');
const {
	dataScssMod,
	dataWithoutScssMod,
	dataCss,
	dataWithoutCssMod
} = require('./mockdata');

const defaultProps = {
	name: 'Button',
	cssMod: true,
	sass: true
};

describe('StyleFile', () => {
	it('should be equal to dataScssMod', () => {
		const styleFile = new StyleFile(defaultProps);
		const fileInfo = styleFile.get();
		expect(fileInfo).toEqual(dataScssMod);
	});

	it('should be equal to dataWithoutScssMod', () => {
		const styleFile = new StyleFile({
			...defaultProps,
			cssMod: false
		});

		const fileInfo = styleFile.get();
		expect(fileInfo).toEqual(dataWithoutScssMod);
	});

	it('should be equal to dataCss', () => {
		const styleFile = new StyleFile({
			...defaultProps,
			sass: false
		});

		const fileInfo = styleFile.get();
		expect(fileInfo).toEqual(dataCss);
	});

	it('should be equal to dataCssWithoutCssMod', () => {
		const styleFile = new StyleFile({
			...defaultProps,
			cssMod: false,
			sass: false
		});

		const fileInfo = styleFile.get();
		expect(fileInfo).toEqual(dataWithoutCssMod);
	});
});
