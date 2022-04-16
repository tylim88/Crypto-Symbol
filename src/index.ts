import { assignValueToPairsObj, onlyAlphaNumeric } from './0_utils'
import { sync } from './1_sync'

//* this should be the correct type, however this type too long due to union, not much info can be found other than https://stackoverflow.com/questions/68463963/typescript-the-inferred-type-of-this-node-exceeds-the-maximum-length-the-compi
// type ori = typeof symbolLookupObject
// export const cryptoSymbol = <T extends { [index: string]: string }>(
// 	newPair?: T
// ) => {
// 	const NSPair = {
// 		...symbolLookupObject,
// 		...newPair,
// 	} as typeof newPair extends undefined ? ori : T extends ori
// 		? Omit<ori, keyof T> & T
// 		: ori extends T
// 		? Omit<ori, keyof T> & T
// 		: ori & T

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
		 *
		 * @param apiKey coinmarketcap api key
		 */
		sync: (apiKey: string) => {
			return sync(apiKey, pairsObj, newPairs)
		},
	}
}
