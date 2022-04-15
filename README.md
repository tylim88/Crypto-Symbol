# Crypto-Symbol

<div align="center">
		<h1>crypto-symbol 烈火君JS</h1>
</div>

<div align="center">
		<a href="https://www.npmjs.com/package/crypto-symbol" target="_blank">
				<img
					src="https://img.shields.io/npm/v/crypto-symbol"
					alt="Created by tylim88"
				/>
			</a>
			&nbsp;
			<a
				href="https://github.com/tylim88/crypto-symbol/blob/main/LICENSE"
				target="_blank"
			>
				<img
					src="https://img.shields.io/github/license/tylim88/crypto-symbol"
					alt="License"
				/>
			</a>
			&nbsp;
			<a
				href="https://www.npmjs.com/package/crypto-symbol?activeTab=dependencies"
				target="_blank"
			>
				<img
					src="https://img.shields.io/badge/dynamic/json?url=https://api.npmutil.com/package/crypto-symbol&label=dependencies&query=$.dependencies.count&color=brightgreen"
					alt="dependency count"
				/>
			</a>
			&nbsp;
			<img
				src="https://img.shields.io/badge/gzipped-2KB-brightgreen"
				alt="package size"
			/>
			&nbsp;
			<a href="https://github.com/tylim88/crypto-symbol/actions" target="_blank">
				<img
					src="https://github.com/tylim88/crypto-symbol/actions/workflows/main.yml/badge.svg"
					alt="github action"
				/>
			</a>
			&nbsp;
			<a href="https://codecov.io/gh/tylim88/crypto-symbol" target="_blank">
				<img
					src="https://codecov.io/gh/tylim88/crypto-symbol/branch/main/graph/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/crypto-symbol/issues" target="_blank">
				<img
					alt="GitHub issues"
					src="https://img.shields.io/github/issues-raw/tylim88/crypto-symbol"
				></img>
			</a>
			&nbsp;
			<a href="https://snyk.io/test/github/tylim88/crypto-symbol" target="_blank">
				<img
					src="https://snyk.io/test/github/tylim88/crypto-symbol/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/crypto-symbol/alerts/"
				target="_blank"
			>
				<img
					alt="Total alerts"
					src="https://img.shields.io/lgtm/alerts/g/tylim88/crypto-symbol.svg?logo=lgtm&logoWidth=18"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/crypto-symbol/context:javascript"
				target="_blank"
			>
				<img
					alt="Language grade: JavaScript"
					src="https://img.shields.io/lgtm/grade/javascript/g/tylim88/crypto-symbol.svg?logo=lgtm&logoWidth=18"
				/>
			</a>
</div>

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
