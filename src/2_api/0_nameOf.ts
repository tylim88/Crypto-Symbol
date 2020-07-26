import { nameOfLookupObj, nameOfLookupObjExact } from '~/1_data'
import { trimAndLowerCase } from '~/0_utils'

/** this function search name based on the input symbol
 * @param {string} symbolString insensitive of case , leading and trailing space
 * @param {{exact:boolean} | undefined } exact set this to true if you want exact match
 * @return {string | undefined}
 */

export const nameOf = (
	symbolString: string,
	config: { exact?: boolean } = {}
): string | undefined => {
	return config.exact
		? nameOfLookupObjExact[symbolString]
		: nameOfLookupObj[trimAndLowerCase(symbolString)]
}

export const name = nameOf // support for legacy api

export const nameM = nameOf // support for legacy api
