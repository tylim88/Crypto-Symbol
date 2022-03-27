# Crypto-Symbol

[![npm](https://img.shields.io/npm/v/crypto-symbol)](https://www.npmjs.com/package/crypto-symbol) [![GitHub](https://img.shields.io/github/license/tylim88/crypto-symbol)](https://github.com/tylim88/crypto-symbol/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/crypto-symbol/pulls) [![tylim88](https://circleci.com/gh/tylim88/Crypto-Symbol.svg?style=shield)](<[LINK](https://github.com/tylim88/crypto-symbol#crypto-symbol)>)

🐤 Simple fuzzy conversion for crypto symbol and crypto name.

📔 Source: [CoinMarketCap](https://coinmarketcap.com)

🔔 Almost 5000 pair to search for, with typescript const assertion.

💪 Can add your own custom name-symbol pair.

🌟 Optimized lookup time.

🆙 last coin list update: 13-Oct-21.

✍️ Written in ES6️⃣ and compiled to ES5️⃣

🥰 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

## Breaking change

version 3.0.0 is not compatible with version 2.0, 3.0 slightly improve the api

## Installation

```bash
npm i crypto-symbol
```

## Usage

🎵 Get Pairs Object

```ts
import { cryptoSymbol } from 'crypto-symbol'

const { get } = cryptoSymbol({})

// all the pair objects are properly typed with const assertion
console.log(get().NSPair) // {Bitcoin: 'BTC',Ethereum: 'ETH','Binance Coin': 'BNB',......}
console.log(get().SNPair) // {BTC: 'Bitcoin',ETH: 'Ethereum','BNB': 'Binance Coin',......}
```

⚒ Add new pair

```ts
import { cryptoSymbol } from 'crypto-symbol'

// will overwrite existing pair and add new type to pairs object
const { get, nameLookup, symbolLookup } = cryptoSymbol({
	newCoin: 'NC123' as const,
}) // use const assertion to narrow down the type
```

🎐 Symbol Lookup

```ts
import { cryptoSymbol } from 'crypto-symbol'

const { symbolLookup } = cryptoSymbol({})

// case insensitive
// ignore all special character and space
console.log(symbolLookup('  liT ec @oin  ')) // "LTC"
console.log(symbolLookup(' τbITcO in ')) // BTC

// case insensitive
// can allow specific special character
// to allow multiple special character, simply concat all the character, eg "#$%)("
console.log(symbolLookup(' τbITcO in ', { allow: 'τ' })) // TBTC

// exact match (case sensitive)
console.log(symbolLookup('  liT ec @oin  ', { exact: true })) // undefined
console.log(symbolLookup('litecoin', { exact: true })) // "undefined"
console.log(symbolLookup('Litecoin', { exact: true })) // "LTC"
```

⚡️ Name Lookup

```ts
import { cryptoSymbol } from 'crypto-symbol'

const { nameLookup } = cryptoSymbol({})

// case insensitive
// ignore all special character and space)
console.log(nameLookup('  @Ltc!   ')) // "Litecoin"

// can allow specific special character
// to allow multiple special character, simply concat all the character, eg "#$%)("
// all symbol are alphanumeric anyway, I don't think you will need it
console.log(nameLookup('  @Ltc!   '), { allow: '@' }) // undefined, because symbol "@Ltc" does not exist

// exact match (case sensitive)
console.log(nameLookup('  Ltc   ', { exact: true })) // undefined
console.log(nameLookup('Ltc', { exact: true })) // undefined
console.log(nameLookup('LTC', { exact: true })) // Litecoin
```
