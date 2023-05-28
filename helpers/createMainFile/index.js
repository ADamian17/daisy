const createMainFile = async ({ ts }) => {
	const fileExtension = ts ? '.tsx' : '.jsx';
	const indexFile = `index${fileExtension}`;

	return indexFile;
};

module.exports = createMainFile;
