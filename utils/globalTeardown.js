const fs = require('fs');

module.exports = async () => {
	fs.rmSync('src', { recursive: true });
};
