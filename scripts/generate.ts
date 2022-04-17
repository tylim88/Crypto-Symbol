import 'dotenv/config'
import { fetch } from '../src/1_sync'
import fs from 'fs'
import path from 'path'
import pkg from '../package.json'
// @ts-expect-error
import bumpVersion from 'semver-increment'
import { diff } from 'deep-object-diff'
import { symbolLookupObject } from '../src/0_constants'
const masks = [0, 0, 1]

export const updateConstant = async () => {
	const data = await fetch(process.env.COINMARKETCAP_KEY as string)
	const newSymbolLookupObject = data.reduce<Record<string, string>>(
		(acc, coin) => {
			acc[coin.name] = coin.symbol
			return acc
		},
		{}
	)
	const diffObj = diff(newSymbolLookupObject, symbolLookupObject)
	if (Object.keys(diffObj).length > 0) {
		const code =
			`export const symbolLookupObject = {` +
			data.reduce<string>((acc, coin) => {
				acc =
					acc +
					`
	[\`${coin.name}\`]: '${coin.symbol}',`
				return acc
			}, '') +
			`
} as const
`

		fs.writeFileSync(
			path.resolve(__dirname, '../src/0_constants/index.ts'),
			code
		)

		pkg.version = bumpVersion(masks, pkg.version)
		fs.writeFileSync(
			path.resolve(__dirname, '../package.json'),
			JSON.stringify(pkg)
		)
	}
}
updateConstant()
