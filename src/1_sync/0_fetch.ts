import axios from 'axios'
/**
 *
 * @param apiKey coinmarketcap api key
 * @returns processed string
 */
export const fetch = async (apiKey: string) => {
	const res = await axios(
		'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000',
		{ headers: { 'X-CMC_PRO_API_KEY': apiKey } }
	)
	return res.data.data as Data
}

type Data = { name: string; symbol: string }[]
