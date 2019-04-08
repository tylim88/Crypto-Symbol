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
const crypto = require('crypto-symbol')

// case insensitive search
console.log(crypto.symbol('liTecoin')) // "LTC"
console.log(crypto.name('lTc')) // "Litecoin"

```

Another way to use it

```
const { crypto } = require('./dist/index')

// less verbose but less efficient
console.log(crypto('liTecoin'), crypto('lTc')) //"LTC Litecoin"
```
