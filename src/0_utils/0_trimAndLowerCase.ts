/**
 * remove trailing and leading space of the input string
 * also lower the case
 * @param string - string that you want to work on
 * @return trimmed and lower cased string
 */

export const trimAndLowerCase = (string: string) =>
	string.toLowerCase().trimEnd().trimStart()
