import names from './constants/names'
import namesLower from './constants/namesLower'
import symbols from './constants/symbols'

const symbol_ = name => {
	return symbols[namesLower.indexOf(name.toLowerCase())]
}

const name_ = symbol => {
	return names[symbols.indexOf(symbol.toUpperCase())]
}

const crypto = {
	symbol(name) {
		return symbol_(name)
	},
	name(symbol) {
		return name_(symbol)
	},
	crypto(string) {
		if (string.length > 4) {
			return symbol_(string) || name_(string)
		} else {
			return name_(string) || symbol_(string)
		}
	},
}

module.exports = crypto
