module.exports = {
	waitForIt: require('./waitForit'),
	mkdir: require('./mkdir'),
	rm: require('./rm'),
	writeFile: require('./writeFile'),
	testSetup: require('./testSetup'),
	...require('./pathValidator')
};
