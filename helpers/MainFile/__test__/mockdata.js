const fileDataTs = {
	file: 'index.tsx',
	fileContent: `import React from "react";\n\nimport styles from "./Button.module.scss";\n\ntype ButtonType = {};\n\nconst Button: React.FC<ButtonType> = (props) => {\n return <div>Button</div>\n};\n\nexport default Button;`
};

const fileDataJs = {
	file: 'index.jsx',
	fileContent: `import React from "react";\n\nimport styles from "./Button.module.scss";\n\nconst Button = (props) => {\n return <div>Button</div>\n};\n\nexport default Button;`
};

const fileDataTsNoStyleImport = {
	...fileDataTs,
	fileContent: `import React from "react";\n\ntype ButtonType = {};\n\nconst Button: React.FC<ButtonType> = (props) => {\n return <div>Button</div>\n};\n\nexport default Button;`
};

const fileDataJsNoStyleImport = {
	...fileDataJs,
	fileContent: `import React from "react";\n\nconst Button = (props) => {\n return <div>Button</div>\n};\n\nexport default Button;`
};

module.exports = {
	fileDataTs,
	fileDataJs,
	fileDataTsNoStyleImport,
	fileDataJsNoStyleImport
};
