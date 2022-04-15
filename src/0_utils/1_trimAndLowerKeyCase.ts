import { trimAndLowerCase } from './0_trimAndLowerCase'

/**
 * remove trailing and leading space of the key
 * also lower the key case
 * does not mutate original object
 * return new object
 * @param obj - object that you want to work on
 * @return new object with all key trimmed and lower cased
 */

export const trimAndLowerKeyCase = <T extends Record<string, string>>(
	obj: T
) => {
	const newObj: Record<string, string> = {}
	for (const prop in obj) {
		newObj[trimAndLowerCase(prop)] = obj[prop] as string
	}
	return newObj
}
