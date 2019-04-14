const {
	symbol,
	name,
	crypto,
	symbolM,
	nameM,
	cryptoM,
	symbols,
	names,
} = require('./dist/index')

const { performance } = require('perf_hooks')

var t0 = performance.now()
// case insensitive search
console.log(symbol('liTecoin')) // "LTC"
console.log(name('lTc')) // "Litecoin"
// less verbose but less efficient
console.log(crypto('liTecoin'), crypto('lTc')) //"LTC Litecoin"
var t1 = performance.now()
console.log(t1 - t0)

var t2 = performance.now()
// memoization
console.log(symbolM('liTecoin')) // "LTC"
console.log(nameM('lTc')) // "Litecoin"
console.log(cryptoM('liTecoin'), cryptoM('lTc')) //"LTC Litecoin"
var t3 = performance.now()
console.log(t3 - t2)

var t3 = performance.now()
// memoization
console.log(symbolM('liTecoin')) // "LTC"
console.log(nameM('lTc')) // "Litecoin"
console.log(cryptoM('liTecoin'), cryptoM('lTc')) //"LTC Litecoin"
var t4 = performance.now()
console.log(t4 - t3)

console.log(symbols.length, names.length)
