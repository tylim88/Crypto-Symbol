import { keepOnlyHigherRank, Data } from './0_keepOnlyHigherRank'
import { AxiosStatic } from './axios'
/**
 *
 * @param apiKey coinmarketcap api key
 * @returns processed string
 */
export const fetch = async (axios: AxiosStatic, apiKey: string) => {
	const res = await axios(
		'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000',
		{ headers: { 'X-CMC_PRO_API_KEY': apiKey } }
	)
	return keepOnlyHigherRank(
		// @ts-expect-error
		res.data.data as Data
	)
}
