import 'dotenv/config'
import { fetch } from '../src/1_sync'
import fs from 'fs'
import path from 'path'

export const updateConstant = async () => {
	const data = await fetch(process.env.COINMARKETCAP_KEY as string)
	const code =
		data.reduce<string>((acc, coin) => {
			if (coin.name !== `Xeno Token` && coin.symbol !== `AOA`) {
				acc =
					acc +
					`
	[\`${coin.name}\`]: '${coin.symbol}',`
			}
			return acc
		}, `export const symbolLookupObject = {`) +
		`
} as const`

	fs.writeFileSync(path.resolve(__dirname, '../src/0_constants/index.ts'), code)
}
updateConstant()
