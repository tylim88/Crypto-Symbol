import { nameSymbolObj } from '~/0_constants'
import { symbolOfLookupObjExact } from '~/1_data'

/**
 * @param {void}
 * @return { [prop:string]:string } the clone of original {name:symbol} WITHOUT custom name symbol pair added by user
 * it is a clone, so it wont affect the original object if you mutate it
 */
export const getIntactNameSymbolObj = () => ({ ...nameSymbolObj })

/**
 * @param {void}
 * @return { [prop:string]:string } the clone of original {name:symbol} PLUS custom name symbol pair added by user
 * it is a clone, so it wont affect the original object if you mutate it
 */
export const getNameSymbolObj = () => ({ ...symbolOfLookupObjExact })

/**
 * @param {void}
 * @return {string[]} return all the names PLUS custom name in array
 * mutating this will not affecting anything
 */
export const getNames = () => Object.keys(symbolOfLookupObjExact)

export const names = getNames

/**
 * @param {void}
 * @return {string[]} return all the symbols PLUS custom symbol in array
 * mutating this will not affecting anything
 */

export const getSymbols = () => Object.values(symbolOfLookupObjExact)

export const symbols = getSymbols
