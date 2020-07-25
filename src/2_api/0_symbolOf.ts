import { symbolOfLookupObj, symbolOfLookupObjExact } from '1_data'
import { onlyAlphaNumeric } from '0_utils'

/** this function search symbol based on the input name
 * @param {string} nameString insensitive of case, whitespace and all special character
 * @param {{exactMatch:boolean} | undefined } exactMatch set this to true if you want exact match
 * @return {string | undefined}
 */

export const symbolOf = (
	nameString: string,
	config: { exactMatch?: boolean } = {}
): string | undefined => {
	return config.exactMatch
		? symbolOfLookupObjExact[nameString]
		: symbolOfLookupObj[onlyAlphaNumeric(nameString)]
}

export const symbol = symbolOf // support for legacy api

export const symbolM = symbolOf // support for legacy api
