import { symbolLookupObject } from '0_constants'
import {
	swapKeyAndValue,
	trimAndLowerKeyCase,
	trimAndLowerCase,
	onlyAlphaNumeric,
} from '0_utils'

/** this function add new pair and create lookup methods
 * @param {object} newPair add new pair of crypto symbol { name:symbol }, place {} if no new pair to add
 * @returns methods
 */
export const cryptoSymbol = <T extends { [index: string]: string }>(
	newPair: T
) => {
	const newSymbolLookupObject: Omit<typeof symbolLookupObject, keyof T> & T = {
		...symbolLookupObject,
		...newPair,
	}
	const nameLookupObjExact = swapKeyAndValue(newSymbolLookupObject)
	const fuzzyNameLookupObj = trimAndLowerKeyCase(nameLookupObjExact)
	const fuzzySymbolLookupObj = trimAndLowerKeyCase(newSymbolLookupObject)
	return {
		/** this function return all pairs object
		 * @returns all pairs object
		 */
		get: () => newSymbolLookupObject,
		/** this function search name based on the input symbol
		 * @param {string} symbolString symbol that you want to search name for
		 * @param {{exact:boolean} | undefined } exact set this to true if you want exact match
		 * @returns {string | undefined} name of the coin
		 */
		nameLookup: (
			symbolString: string,
			config: { exact?: boolean; specialCharacterToAllow?: string } = {
				exact: false,
				specialCharacterToAllow: '',
			}
		) => {
			return config.exact
				? nameLookupObjExact[symbolString]
				: fuzzyNameLookupObj[
						onlyAlphaNumeric(symbolString, config.specialCharacterToAllow)
				  ]
		},
		/** this function search symbol based on the input name
		 * @param {string} nameString name that you want to search symbol for
		 * @param {{exact:boolean} | undefined } exact set this to true if you want exact match
		 * @returns {string | undefined} symbol of the coin
		 */
		symbolLookup: (
			nameString: string,
			config: { exact?: boolean; specialCharacterToAllow?: string } = {
				exact: false,
				specialCharacterToAllow: '',
			}
		): string | undefined => {
			return config.exact
				? newSymbolLookupObject[nameString]
				: fuzzySymbolLookupObj[
						onlyAlphaNumeric(nameString, config.specialCharacterToAllow)
				  ]
		},
	}
}
