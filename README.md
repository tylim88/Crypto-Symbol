<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

<div align="center">
<img>
		<img src="https://raw.githubusercontent.com/tylim88/crypto-symbol/master/img/symbol.png" width="200px"/>
		<h1>Crypto Symbol</h1>
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
			<a href="https://github.com/tylim88/crypto-symbol/actions" target="_blank">
				<img
					src="https://github.com/tylim88/Crypto-Symbol/workflows/Main/badge.svg"
					alt="github action"
				/>
			</a>
			&nbsp;
			<a href="https://codecov.io/gh/tylim88/Crypto-Symbol" target="_blank">
				<img
					src="https://codecov.io/gh/tylim88/Crypto-Symbol/branch/master/graph/badge.svg"
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
				href="https://lgtm.com/projects/g/tylim88/Crypto-Symbol/alerts/"
				target="_blank"
			>
				<img
					alt="Total alerts"
					src="https://img.shields.io/lgtm/alerts/g/tylim88/Crypto-Symbol.svg?logo=lgtm&logoWidth=18"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/Crypto-Symbol/context:javascript"
				target="_blank"
			>
				<img
					alt="Language grade: JavaScript"
					src="https://img.shields.io/lgtm/grade/javascript/g/tylim88/Crypto-Symbol.svg?logo=lgtm&logoWidth=18"
				/>
			</a>

</div>
<br/>

🐤 Simple fuzzy conversion for crypto symbol and crypto name.

📔 Source: [CoinMarketCap](https://coinmarketcap.com)

🔔 Almost 5000 pairs to search for, with typescript const assertion.

💪 Can add your own custom name-symbol pair.

🌟 Optimized lookup time.

🆙 last coin list update: 7-April-22.

✍️ Written in ES6️⃣ and compiled to ES5️⃣

🥰 0 dependencies.

⛲️ Out of box typescript support.

🦺 Development code, built code, and published code are all tested in CI.

## Installation

```bash
npm i crypto-symbol
```

## Usage

**If duplicated names or symbols are found in the CoinMarketCap list, the library keep only the one with higher rank(larger market cap). This check is case-insensitive.**

If you need coins with lower rank, you can add it yourself, keep in mind to use unique name and unique symbol for them.

🎵 Get Pairs Object

```ts
import { cryptoSymbol } from 'crypto-symbol'

const { get } = cryptoSymbol({})

// all the pair objects are properly typed with const assertion
console.log(get().NSPair) // {Bitcoin: 'BTC',Ethereum: 'ETH','Binance Coin': 'BNB',......}
console.log(get().SNPair) // {BTC: 'Bitcoin',ETH: 'Ethereum','BNB': 'Binance Coin',......}
```

⚒ Add new pair or modify existing pair

```ts
import { cryptoSymbol } from 'crypto-symbol'

// will overwrite existing pair and add new type to pairs object
const { get, nameLookup, symbolLookup } = cryptoSymbol({
	newCoin: 'NC123' as const, // add new coin
	bitcoin: 'BTC' as const, // modify existing coin
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

🍀 Sync

1. You can only use this api in server environment due to Coinmarketcap CORS policy.
2. You need to install [axios](https://www.npmjs.com/package/axios) to use this api.
3. Added pair and modified pairs have higher priority than sync, sync will not overwrite them.

```ts
import { cryptoSymbol } from 'crypto-symbol'

const { sync } = cryptoSymbol({})

// sync with latest coinmarketcap list
// this is a promise
sync('coinmarketcap apiKey')
```

## credit

Crypto Symbol logo [source](https://flyclipart.com/cryptocurrency-gold-cryptocurrency-png-678000#)
