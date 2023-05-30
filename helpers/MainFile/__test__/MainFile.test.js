const MainFile = require('..');
const {
	fileDataTs,
	fileDataJs,
	fi,
	fileDataTsNoStyleImport,
	fileDataJsNoStyleImport
} = require('./mockdata');

const defaultProps = {
	name: 'Button',
	styleImport: `import styles from "./Button.module.scss";`,
	ts: true
};

describe('MainFile', () => {
	it('should return string template with css modules, sass, ts', () => {
		const mainFile = new MainFile(defaultProps);
		const fileInfo = mainFile.get();

		expect(fileInfo).toEqual(fileDataTs);
	});

	it('should return string template with css modules, sass, js', () => {
		const mainFile = new MainFile({ ...defaultProps, ts: false });
		const fileInfo = mainFile.get();

		expect(fileInfo).toEqual(fileDataJs);
	});

	it('should return string template with ts, no styles', () => {
		const mainFile = new MainFile({ ...defaultProps, styleImport: '' });
		const fileInfo = mainFile.get();

		expect(fileInfo).toEqual(fileDataTsNoStyleImport);
	});

	it('should return string template with js, no styles', () => {
		const mainFile = new MainFile({
			...defaultProps,
			styleImport: '',
			ts: false
		});
		const fileInfo = mainFile.get();

		expect(fileInfo).toEqual(fileDataJsNoStyleImport);
	});
});
