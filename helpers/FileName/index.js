class FileName {
	toCamelCase(str) {
		if (str.split(' ').length === 1) return str;

		return str
			.split(' ')
			.map((item, idx) => {
				if (idx <= 0) {
					return item.toLowerCase();
				}

				return this.toCapitalize(item);
			})
			.join('');
	}

	toCapitalize(str) {
		const res = str.toLowerCase();
		const firstLetter = res.substring(0, 1);

		return res.replace(firstLetter, firstLetter.toUpperCase());
	}

	toKebabCase(str) {
		if (str.split(' ').length === 1) return str;

		return str.toLowerCase().split(' ').join('-');
	}

	toPascalCase(str) {
		const s = str.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		const containsSpecialCharacters = s.includes('-');
		const formatedStr = containsSpecialCharacters
			? s.replace(/-/g, ' ')
			: str;

		if (formatedStr.split(' ').length === 1) return this.toCapitalize(str);

		return formatedStr
			.split(' ')
			.map(item => this.toCapitalize(item))
			.join('');
	}
}

module.exports = new FileName();
