/**
 * remove trailing and leading space of the input string
 * also lower the case
 * @param {string} string - object that you want to work on
 * @return {string}
 */

export const trimAndLowerCase = (string: string) =>
	string.toLowerCase().trimEnd().trimStart()
