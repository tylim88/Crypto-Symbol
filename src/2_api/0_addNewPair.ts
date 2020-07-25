import {
	nameOfLookupObj,
	nameOfLookupObjExact,
	symbolOfLookupObj,
	symbolOfLookupObjExact,
} from '1_data'
import { onlyAlphaNumeric, trimAndLowerCase } from '0_utils'

/** add user custom name-symbol pair
 * @param {string} nameString name of the crypto
 * @param {string} symbolName symbol of the crypto
 * @return {void}
 */
export const addNewPair = (nameString: string, symbolString: string) => {
	nameOfLookupObjExact[symbolString] = nameString
	nameOfLookupObj[trimAndLowerCase(symbolString)] = nameString
	symbolOfLookupObjExact[nameString] = symbolString
	symbolOfLookupObj[onlyAlphaNumeric(nameString)] = symbolString
}
