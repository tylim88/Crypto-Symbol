import { assignValueToPairsObj, onlyAlphaNumeric } from './0_utils'
import { sync, AxiosStatic } from './1_sync'

/** this function add new pair and create lookup methods
 * @param newPairs add new pair of crypto symbol { name:symbol }, place {} if no new pair to add
 * @returns methods
 */

export const cryptoSymbol = <T extends Record<string, string>>(newPairs: T) => {
	const pairsObj = {}
	const pairsObjWithNewType = assignValueToPairsObj(pairsObj, newPairs)

	return {
		/** this function return all pairs object
		 * @returns {
			NSPair: name-symbol pair,
			SNPair: symbol-name pairs,
		}
		 */
		get: () => ({
			NSPair: pairsObjWithNewType.NSPair,
			SNPair: pairsObjWithNewType.SNPair,
		}),
		/** this function search name based on the input symbol
		 * @param symbolString symbol that you want to search name for
		 * @param exact set this to true if you want exact match, "allow" whitelist the character you dont want to ignore
		 * @returns name of the coin
		 */
		nameLookup: (
			symbolString: string,
			config: { exact?: boolean; allow?: string } = {
				exact: false,
				allow: '',
			}
		) => {
			return config.exact
				? pairsObjWithNewType.SNPair[symbolString]
				: pairsObjWithNewType.SNPairTrimmed[
						onlyAlphaNumeric(symbolString, config.allow)
				  ]
		},
		/** this function search symbol based on the input name
		 * @param nameString name that you want to search symbol for
		 * @param exact set this to true if you want exact match, "allow" whitelist the character you dont want to ignore
		 * @returns symbol of the coin
		 */
		symbolLookup: (
			nameString: string,
			config: { exact?: boolean; allow?: string } = {
				exact: false,
				allow: '',
			}
		): string | undefined => {
			return config.exact
				? pairsObjWithNewType.NSPair[nameString]
				: pairsObjWithNewType.NSPairTrimmed[
						onlyAlphaNumeric(nameString, config.allow)
				  ]
		},
		/**
		 * sync with latest coinmarketcap list, can only run in server environment
		 * please install axios to use this api
		 * @param apiKey coinmarketcap api key
		 * @param axios axios default export
		 */
		sync: (apiKey: string, axios: AxiosStatic) => {
			return sync(axios, apiKey, pairsObj, newPairs)
		},
	}
}
