import names from './constants/names'
import symbols from './constants/symbols'

const namesLower = names.map(name => name.toLowerCase())

const symbol_ = name =>
	symbols[namesLower.indexOf(name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase())]

const name_ = symbol => names[symbols.indexOf(symbol.toUpperCase())]

const symbol = {}
namesLower.forEach((name, i) => {
	symbol[name] = symbols[i]
})

const name = {}
symbols.forEach((symbol, i) => {
	name[symbol] = names[i]
})

const symbolM_ = name =>
	symbol[name] ||
	(symbol[name] = symbol[name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()])

const nameM_ = symbol =>
	name[symbol] || (name[symbol] = name[symbol.toUpperCase()])

const crypto_ = (string, symbol, name) => {
	if (string.length > 4) return symbol(string) || name(string)

	return name(string) || symbol(string)
}

const crypto = {
	symbol: name => symbol_(name),

	name: symbol => name_(symbol),

	crypto: string => crypto_(string, symbol_, name_),

	symbolM: name => symbolM_(name),

	nameM: symbol => nameM_(symbol),

	cryptoM: string => crypto_(string, symbolM_, nameM_),
}
module.exports = crypto
