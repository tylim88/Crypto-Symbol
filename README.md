# Crypto-Symbol

🐤 Provide easy conversion between crypto symbol and name

📔 Source: [CoinMarketCap](https://coinmarketcap.com/all/views/all/)

✍️ Written in ES6️⃣ and compiled to ES5️⃣

🆙 last update: 27-July-20

## Announcement 1

version 0.3 update the name and symbol to the latest of coinmarketcap

## Announcement 2

due to increase download of this package (which is unexpected), I decided to continue the work on this library, starting from v 1.0 in future:

- no more array search, only object lookup  
- due to the improvement above, expect the depreciation of `symbolM` and `nameM` (because they are no longer needed, but you still can use them)
- api to add custom name and symbol
- typescript support
- more comprehensive test
- CI/CD

## Installation

```bash
npm i crypto-symbol
```

## Usage

🎐 Normal Usage

```js
const {symbol, name} = require('crypto-symbol')

// case insensitive search
console.log(symbol('liTecoin')) // "LTC"
console.log(name('lTc')) // "Litecoin"
```

⚡️ Memoization (highly recommended)

```js
const {symbolM, nameM} = require('crypto-symbol')

// consume more memory(insignificant) but much faster lookup
// 800% to 1000% faster than array lookup on my machine
console.log(symbolM('liTecoin')) // "LTC"
console.log(nameM('lTc')) // "Litecoin"
```

📚 Get Symbol and Name array

```js
const {symbols, names} = require('crypto-symbol')

console.log(symbols) // ['BTC',	'LTC'...]
console.log(names) // ['Bitcoin', 'Litecoin'....]
```

## Depreciated

⚠️ Api that still available but no longer recommended

```js
const {crypto, cryptoM} = require('crypto-symbol')

console.log(crypto('liTecoin'), crypto('lTc')) //"LTC Litecoin"
console.log(cryptoM('liTecoin'), cryptoM('lTc')) //"LTC Litecoin"
```

## Tips & Star

😄 consider star or tipping me if you like this small and useful library, and wish to see more rapid development

BTC: `1KbpCqzZ6FSfoi1R9obGEVXRHpbJMQQCda`  
ETH: `0x4DfD790D98F8f3E013E70da51E70B60b953c7e61`  
LTC: `LXVYLpe9zQ48aGCuBqjLW8xxaBfVBauXST`  
XRP: `rnftUYRq91TBL6ceK5y3UnFiYBLQMFkZn6`  
ADA: `Ae2tdPwUPEYxapgJjg9qpg1RhyfBq5vx6ZdWXafNqZihg4rCD7baXhMf7CH`  
BNB: `0x4DfD790D98F8f3E013E70da51E70B60b953c7e61`  
[PayPal](https://www.paypal.me/tylim88)
