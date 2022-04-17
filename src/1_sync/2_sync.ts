import { fetch } from './1_fetch'
import { assignValueToPairsObj } from '../0_utils'

/**
 * sync with latest coinmarketcap list, can only run in server environment
 * please install axios to use this api
 * @param apiKey coinmarketcap api key
 * @param pairsObj empty object or existing pairs object
 * @param newPairs add new pair of crypto symbol { name:symbol }, place {} if no new pair to add
 */
export const sync = async (
	apiKey: string,
	pairsObj: Record<string, string>,
	newPairs: Record<string, string>
) => {
	const data = await fetch(apiKey)
	const newData = data.reduce<Record<string, string>>((acc, coin) => {
		acc[coin.name] = coin.symbol
		return acc
	}, {})
	assignValueToPairsObj(pairsObj, { ...newData, ...newPairs })
}
