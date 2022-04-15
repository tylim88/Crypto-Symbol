/**
 * swap key to value and swap value to key
 * does not mutate object
 * return new swapped object
 * @param obj - object that you want to swap
 * @return swapped object
 */
export const swapKeyAndValue = <T extends Record<string, string>>(obj: T) => {
	const newObj: Record<string, string> = {}
	for (const prop in obj) {
		newObj[obj[prop] as string] = prop
	}
	return newObj as { [K in keyof T as T[K]]: K }
}
