const fs = require('fs');
/**
 * Brief description of the function here.
 * @param {String} filePath - base path to the directory you want ro remove
 * @param {Boolean} recursive - set if you want to delete everything inside the directory
 * @return {void} Brief description of the returning value here.
 */

module.exports = (filePath, recursive = true) => {
	fs.rmSync(filePath, { recursive });
};
