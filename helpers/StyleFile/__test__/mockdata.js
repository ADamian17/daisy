const dataScssMod = {
	file: 'Button.module.scss',
	fileImport: `import styles from "./Button.module.scss";`
};

const dataWithoutScssMod = {
	file: 'Button.scss',
	fileImport: `import "./Button.scss";`
};

const dataCss = {
	file: 'Button.module.css',
	fileImport: `import styles from "./Button.module.css";`
};

const dataWithoutCssMod = {
	file: 'Button.css',
	fileImport: `import "./Button.css";`
};

module.exports = {
	dataCss,
	dataScssMod,
	dataWithoutCssMod,
	dataWithoutScssMod
};
