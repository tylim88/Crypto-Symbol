import { fetch } from './0_fetch'
import { assignValueToPairsObj } from '../0_utils'

/**
 *
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
	assignValueToPairsObj(pairsObj, { ...data, ...newPairs })
}
