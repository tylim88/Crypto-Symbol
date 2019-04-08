import names from './constants/names'
import namesLower from './constants/namesLower'
import symbols from './constants/symbols'

const crypto = {
	symbol(name) {
		return symbols[namesLower.indexOf(name.toLowerCase())]
	},
	name(symbol) {
		return names[symbols.indexOf(symbol.toUpperCase())]
	},
	crypto(string) {
		if (string.length > 4) {
			return this.symbol(string) || this.name(string)
		} else {
			return this.name(string) || this.symbol(string)
		}
	},
}

export default crypto
