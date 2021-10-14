/**
 * swap key to value and swap value to key
 * does not mutate object
 * return new object
 * @param {{ [prop: string]: string }} - object that you want to swap
 * @return {[prop:string]: string}
 */
export const swapKeyAndValue = <T extends { [index: string]: string }>(
	obj: T
) => {
	const newObj: { [prop: string]: string } = {}
	for (const prop in obj) {
		newObj[obj[prop]] = prop
	}
	return newObj as { [K in keyof T as T[K]]: K }
}
