const createStyleFile = async ({ name, cssMod, sass }) => {
	const cssExtension = sass ? '.scss' : '.css';
	const cssModules = cssMod ? '.module' : '';
	const styleFile = `${name}${cssModules}${cssExtension}`;

	return styleFile;
};

module.exports = createStyleFile;
