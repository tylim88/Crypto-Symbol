import { trimAndLowerCase } from './0_trimAndLowerCase'

/**
 * remove trailing and leading space of the key
 * also lower the key case
 * does not mutate original object
 * return new object
 * @param {{ [prop: string]: string }} obj - object that you want to work on
 * @return {[prop:string]: string}
 */

export const trimAndLowerKeyCase = (obj: { [prop: string]: string }) => {
	const newObj: { [prop: string]: string } = {}
	for (const prop in obj) {
		newObj[trimAndLowerCase(prop)] = obj[prop]
	}
	return newObj
}
