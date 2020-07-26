import { nameSymbolObj } from '~/0_constants'
import { onlyAlphaNumericKey } from '~/0_utils'

/** name to symbol lookup object for exact match
 * @return {[prop:string]: string} a name:symbol object
 */
export const symbolOfLookupObjExact: {
	[prop: string]: string
} = { ...nameSymbolObj }

/** name to symbol lookup object for non exact match
 * @return {[prop:string]: string} a name:symbol object
 */
export const symbolOfLookupObj = onlyAlphaNumericKey(nameSymbolObj)
