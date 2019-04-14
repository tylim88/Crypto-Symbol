# Crypto-Symbol

Provide easy conversion between crypto symbol and name

Source: https://coinmarketcap.com/all/views/all/

last update: 10-Apr-19

Written in ES6 and compiled to ES5

## Installation

```
npm i crypto-symbol
```

## Usage

Normal Usage

```
const {symbol, name} = require('crypto-symbol')

// case insensitive search
console.log(symbol('liTecoin')) // "LTC"
console.log(name('lTc')) // "Litecoin"
```

Memoization (highly recommended)

```
const {symbolM, nameM} = require('crypto-symbol')

// consume more memory(insignificant) but much faster lookup
// 800% to 1000% faster than array lookup on my machine
console.log(symbolM('liTecoin')) // "LTC"
console.log(nameM('lTc')) // "Litecoin"
```

Get Symbol and Name array

```
const {symbols, names} = require('crypto-symbol')

console.log(symbols) // ['BTC',	'LTC'...]
console.log(names) // ['Bitcoin', 'Litecoin'....]
```

## Depreciated

// api that still available but no longer recommended

```
const {crypto, cryptoM} = require('crypto-symbol')

console.log(crypto('liTecoin'), crypto('lTc')) //"LTC Litecoin"
console.log(cryptoM('liTecoin'), cryptoM('lTc')) //"LTC Litecoin"
```

## Tips & Star

consider star or tipping me if you like this small and useful library, and wish to see more rapid development 😄

BTC: 1KbpCqzZ6FSfoi1R9obGEVXRHpbJMQQCda  
ETH: 0x4DfD790D98F8f3E013E70da51E70B60b953c7e61  
LTC: LXVYLpe9zQ48aGCuBqjLW8xxaBfVBauXST  
XRP: rnftUYRq91TBL6ceK5y3UnFiYBLQMFkZn6  
ADA: Ae2tdPwUPEYxapgJjg9qpg1RhyfBq5vx6ZdWXafNqZihg4rCD7baXhMf7CH  
BNB: 0x4DfD790D98F8f3E013E70da51E70B60b953c7e61  
paypal: paypal.me/tylim88
