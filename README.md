# Crypto-Symbol-Name

Provide easy conversion between crypto symbol and name

Source: https://coinmarketcap.com/all/views/all/

last updated: 08-Apr-19

## Installation

```
npm i crypto-symbol
```

## Usage

```
const {symbol, name, crypto,symbolM, nameM, cryptoM,} = require('crypto-symbol')

// case insensitive search
console.log(symbol('liTecoin')) // "LTC"
console.log(name('lTc')) // "Litecoin"
// less verbose but less efficient
console.log(crypto('liTecoin'), crypto('lTc')) //"LTC Litecoin"


// memoization, consume more memory but much faster lookup
console.log(symbolM('liTecoin')) // "LTC"
console.log(nameM('lTc')) // "Litecoin"
console.log(cryptoM('liTecoin'), cryptoM('lTc')) //"LTC Litecoin"
```
