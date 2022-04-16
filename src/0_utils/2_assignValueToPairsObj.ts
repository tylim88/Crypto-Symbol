import { swapKeyAndValue, SwapKeyAndValue } from './0_swapKeyAndValue'
import { trimAndLowerKeyCase } from './1_trimAndLowerKeyCase'
import { symbolLookupObject } from '../0_constants'

type AddNewPairs<T extends Record<string, string>> = Omit<
	typeof symbolLookupObject,
	keyof T
> &
	T

export type PairsObj<T extends Record<string, string>> = {
	NSPair: AddNewPairs<T> & Record<string, string>
	SNPair: SwapKeyAndValue<AddNewPairs<T>> & Record<string, string>
	SNPairTrimmed: Record<string, string>
	NSPairTrimmed: Record<string, string>
}
/**
 *
 * @param pairsObj empty object or existing pairs object
 * @param newPairs add new pair of crypto symbol { name:symbol }, place {} if no new pair to add
 * @returns the same object but with new type
 */
export const assignValueToPairsObj = <T extends Record<string, string>>(
	pairsObj: Record<string, string>,
	newPairs: T
) => {
	const NSPair: Omit<typeof symbolLookupObject, keyof T> & T = {
		...symbolLookupObject,
		...newPairs,
	}
	const SNPair = swapKeyAndValue(NSPair)
	const SNPairTrimmed = trimAndLowerKeyCase(SNPair)
	const NSPairTrimmed = trimAndLowerKeyCase(NSPair)

	const pairsObjWithNewType = pairsObj as unknown as PairsObj<T>
	pairsObjWithNewType['NSPair'] = NSPair
	pairsObjWithNewType['SNPair'] = SNPair
	pairsObjWithNewType['SNPairTrimmed'] = SNPairTrimmed
	pairsObjWithNewType['NSPairTrimmed'] = NSPairTrimmed

	return pairsObjWithNewType
}
