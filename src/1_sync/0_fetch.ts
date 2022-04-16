import axios from 'axios'
/**
 *
 * @param apiKey coinmarketcap api key
 * @returns processed string
 */
export const fetch = async (apiKey: string) => {
	const res = await axios(
		'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
		{ headers: { 'X-CMC_PRO_API_KEY': apiKey } }
	)
	const data = res.data.data as Data
	return data.reduce<Record<string, string>>((acc, coin) => {
		// edge case https://github.com/tylim88/Crypto-Symbol/issues/16
		if (coin.symbol !== 'Xeno Token') {
			acc[coin.name] = coin.symbol
		}
		return acc
	}, {})
}

type Data = { name: string; symbol: string }[]
