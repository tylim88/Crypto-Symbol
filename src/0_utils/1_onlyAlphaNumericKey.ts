import { onlyAlphaNumeric } from './0_onlyAlphaNumeric'
/**
 * remove all non alphaNumeric characters from object keys
 * also lower the case
 * does not mutate original object
 * return new object
 * @param {{ [prop: string]: string }} obj - object that you want to work on
 * @return {[prop:string]: string}
 */
export const onlyAlphaNumericKey = (obj: { [prop: string]: string }) => {
	const newObj: { [prop: string]: string } = {}
	for (const prop in obj) {
		newObj[onlyAlphaNumeric(prop)] = obj[prop]
	}
	return newObj
}
