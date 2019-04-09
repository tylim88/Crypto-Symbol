import names from './constants/names'
import namesLower from './constants/namesLower'
import symbols from './constants/symbols'

const symbol_ = name =>
	symbols[namesLower.indexOf(name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase())]

const name_ = symbol => names[symbols.indexOf(symbol.toUpperCase())]

const symbol = {}
const name = {}
namesLower.forEach((name, i) => {
	symbol[name] = symbols[i]
})
symbols.forEach((symbol, i) => {
	name[symbol] = names[i]
})

const symbolM_ = name =>
	symbol[name] ||
	(symbol[name] = symbol[name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()])

const nameM_ = symbol =>
	name[symbol] || (name[symbol] = name[symbol.toUpperCase()])

const crypto = {
	symbol: name => symbol_(name),

	name: symbol => name_(symbol),

	crypto: string => {
		if (string.length > 4) return symbol_(string) || name_(string)

		return name_(string) || symbol_(string)
	},

	symbolM: name => symbolM_(name),

	nameM: symbol => nameM_(symbol),

	cryptoM: string => {
		if (string.length > 4) return symbolM_(string) || nameM_(string)
		return nameM_(string) || symbolM_(string)
	},
}
module.exports = crypto
