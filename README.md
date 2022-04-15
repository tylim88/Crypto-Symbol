# Crypto-Symbol

<div align="center">
		<h1>crypto-symbol</h1>
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
					src="https://github.com/tylim88/crypto-symbol/actions/workflows/main.yml/badge.svg"
					alt="github action"
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

</div>
<br/>

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

## Regarding 3.3.0

The new `Nano` symbol ticker symbol is `XNO` which is conflict with the `Xeno Token` symbol.

I believe this is the only edge case as ticker has to be unique, not sure why `Nano` violate it.

Since there is only one edge case, I decide to sacrifice `Xeno Token` because it is not well known, `Xeno Token` no longer in the list.

If you think a future-proof solution is needed, open an issue and justify it, then I will consider put more effort on it.

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
