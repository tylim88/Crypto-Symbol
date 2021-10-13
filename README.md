# Crypto-Symbol

[![npm](https://img.shields.io/npm/v/crypto-symbol)](https://www.npmjs.com/package/crypto-symbol) [![GitHub](https://img.shields.io/github/license/tylim88/crypto-symbol)](https://github.com/tylim88/crypto-symbol/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/crypto-symbol/pulls) [![tylim88](https://circleci.com/gh/tylim88/Crypto-Symbol.svg?style=shield)](<[LINK](https://github.com/tylim88/crypto-symbol#crypto-symbol)>)

🐤 Provide easy conversion between crypto symbol and name.

📔 Source: [CoinMarketCap](https://coinmarketcap.com)

🔔 Almost 5000 pair to search for.

💪 Can add your own custom name-symbol pair.

🌟 Optimized lookup time.

🆙 last coin list update: 13-Oct-21.

✍️ Written in ES6️⃣ and compiled to ES5️⃣

🥰 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

## Breaking change

version 2.0.0 is not compatible with version 1, 2.0 api is now much simpler and easier to use, the pairs object now comes with typescript const assertion (narrowing the types).

## Installation

```bash
npm i crypto-symbol
```

## Usage

⚒ Add new pair

```js
import { cryptoSymbol } from 'crypto-symbol'

// will overwrite existing pair and add new type to pairs object
const { get, nameLookup, symbolLookup } = cryptoSymbol({ newCoin: 'NC123' })
```

🎐 Symbol Lookup

```js
import { cryptoSymbol } from 'crypto-symbol'

const { symbolLookup } = cryptoSymbol({})

// case insensitive
// allow only alphanumeric
// by default ignore all special character and space)
console.log(symbolLookup('  liT ec @oin  ')) // "LTC"

// can allow specific special character (co-exist with case insensitive and allow alphanumeric rules)
// to allow multiple special character, simply concat the all the character, eg "#$%)("
symbolLookup(' τbITcO in ') // BTC
symbolLookup(' τbITcO in ', { specialCharacterToAllow: 'τ' }) // TBTC

// exact match (including case sensitive)
console.log(symbolLookup('  liT ec @oin  ', { exact: true })) // undefined
console.log(symbolLookup('litecoin', { exact: true })) // "undefined"
console.log(symbolLookup('Litecoin', { exact: true })) // "LTC"
```

⚡️ Name Lookup

```js
import { cryptoSymbol } from 'crypto-symbol'

const { nameLookup } = cryptoSymbol({})

// case insensitive
// allow only alphanumeric
// ignore all special character and space)
console.log(nameLookup('  @Ltc!   ')) // "Litecoin"

// can allow specific special character (co-exist with case insensitive and allow alphanumeric rules)
// to allow multiple special character, simply concat the all the character, eg "#$%)("
// however this seem pointless as all symbol are alphanumeric
console.log(nameLookup('  @Ltc!   '), { specialCharacterToAllow: '@' }) // undefined, because symbol "@Ltc" does not exist

// exact match (including case sensitive)
console.log(nameLookup('  Ltc   ', { exact: true })) // undefined
console.log(nameLookup('Ltc', { exact: true })) // undefined
console.log(nameLookup('LTC', { exact: true })) // Litecoin
```

🎵 Get Pairs Object

```js
import { cryptoSymbol } from 'crypto-symbol'

const { get } = cryptoSymbol({})

console.log(get()) // {Bitcoin: 'BTC',Ethereum: 'ETH','Binance Coin': 'BNB',Cardano: 'ADA',Tether: 'USDT',XRP: 'XRP', ......}
```
