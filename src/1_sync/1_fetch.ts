import { keepOnlyHigherRank, Data } from './0_keepOnlyHigherRank'
/**
 *
 * @param apiKey coinmarketcap api key
 * @returns processed string
 */
export const fetch = async (apiKey: string) => {
	const axios = (await import('axios')).default
	const res = await axios(
		'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000',
		{ headers: { 'X-CMC_PRO_API_KEY': apiKey } }
	)
	return keepOnlyHigherRank(res.data.data as Data)
}
