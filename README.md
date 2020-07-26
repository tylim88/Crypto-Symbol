# Crypto-Symbol

[![npm](https://img.shields.io/npm/v/crypto-symbol)](https://www.npmjs.com/package/crypto-symbol) [![GitHub](https://img.shields.io/github/license/tylim88/crypto-symbol)](https://github.com/tylim88/crypto-symbol/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/crypto-symbol/pulls)[![tylim88](https://circleci.com/gh/tylim88/Crypto-Symbol.svg?style=shield)](<[LINK](https://github.com/tylim88/crypto-symbol#crypto-symbol)>)

🐤 Provide easy conversion between crypto symbol and name

📔 Source: [CoinMarketCap](https://coinmarketcap.com/all/views/all/)

🔔 Almost 3000 pair to search.

🆙 last coin list update: 24-July-20

✍️ Written in ES6️⃣ and compiled to ES5️⃣

⛲️ Out of box typescript support

## Note

version 1.0.0 released, I remade the whole library but keep **most** API function intact and added new API: retrieve name-symbol object and add new pair.

all API work exactly like before(and include) v0.3 unless stated otherwise.

## Installation

```bash
npm i crypto-symbol
```

## Usage

🎐 Symbol Lookup

```js
import { symbolOf, symbol, symbolM } from 'crypto-symbol'

// case insensitive
// special character insensitive(only alphabet and number)
// space insensitive
// all this characteristic is same as API before v0.3
console.log(symbolOf('  liT ec @oin  ')) // "LTC"

// symbol and symbolM are alias of symbolOf
// they all do the same thing
// they exist to support old API
// symbol and symbolM will be depreciated in future
console.log(symbol('  liT ec @oin  ')) // "LTC"
console.log(symbolM('  liT ec @oin  ')) // "LTC"

// exact match (including case sensitive)
console.log(symbolOf('  liT ec @oin  ', { exact: true })) // undefined
console.log(symbolOf('litecoin', { exact: true })) // "undefined"
console.log(symbolOf('Litecoin', { exact: true })) // "LTC"
```

⚡️ Name Lookup

Note: the old name lookup in version 0.3-- does not ignore trailing and leading space

```js
import { nameOf, nameM, name } from 'crypto-symbol'

// trailing space insensitive
// leading space insensitive
// case insensitive
console.log(nameOf('  Ltc   ')) // "Litecoin"

// name and nameM are alias of nameOf
// they all do the same thing
// they exist to support old API
// name and nameM will be depreciated in future
console.log(name('  Ltc   ')) // "Litecoin"
console.log(nameM('  Ltc   ')) // "Litecoin"

// exact match (including case sensitive)
console.log(nameOf('  Ltc   ', { exact: true })) // undefined
console.log(nameOf('Ltc', { exact: true })) // undefined
console.log(nameOf('LTC', { exact: true })) // Litecoin
```

🎵 Get Symbols

Note: the old `symbols` will yield array, now it is a function.

```js
import { symbols, getSymbols } from 'crypto-symbol'

// return array of symbols, including custom symbols
// the array is safe to mutate
// symbols are alias of getSymbols
// symbols will be depreciated in future
console.log(getSymbols()) // ['BTC','LTC'...]
console.log(symbols()) // ['BTC','LTC'...]
```

📚 Get Symbols

Note: the old `names` will yield array, now it is a function.

```js
import { names, getNames } from 'crypto-symbol'

// return array of names, including custom names
// the array is safe to mutate
// names are alias of getNames
// names will be depreciated in future
console.log(getNames()) // ['Bitcoin', 'Litecoin'....]
console.log(names()) // ['Bitcoin', 'Litecoin'....]
```

⚖️ Get lookup object

```js
import { getNameSymbolObj, getIntactNameSymbolObj } from 'crypto-symbol'

// return the name-symbol object, including the custom pair
console.log(getNameSymbolObj()) // {Bitcoin:"BTC", Litecoin:"LTC",...}

// return the name-symbol object, excluding the custom pair
console.log(getIntactNameSymbolObj()) // {Bitcoin:"BTC", Litecoin:"LTC",...}
```

⚒ Add custom pair

```js
import { addNewPair } from 'crypto-symbol'

// you can use this to add custom pair for lookup
// you can also overwrite existing pair
console.log(addNewPair('newCoin', 'NC123'))
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
