import 'dotenv/config'
import { fetch } from '../src/1_sync'
import fs from 'fs'
import path from 'path'

export const updateConstant = async () => {
	const data = await fetch(process.env.COINMARKETCAP_KEY as string)
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

	fs.writeFileSync(path.resolve(__dirname, '../src/0_constants/index.ts'), code)
}
updateConstant()
