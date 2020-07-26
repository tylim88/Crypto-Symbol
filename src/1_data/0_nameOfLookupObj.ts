import { nameSymbolObj } from '0_constants'
import { swapKeyAndValue, trimAndLowerKeyCase } from '0_utils'

/** symbol to name lookup object for exact match
 *  @return {[prop:string]: string} a symbol:name object
 */
export const nameOfLookupObjExact = swapKeyAndValue(nameSymbolObj)

/** symbol to name lookup object for non exact match
 * @return {[prop:string]: string} a symbol:name object
 */
export const nameOfLookupObj = trimAndLowerKeyCase(nameOfLookupObjExact)
