/**
 * remove all non alphaNumeric characters from a string
 * also convert it to lower case
 * @param string - string that you want to work on
 * @return nameString without special characters
 */
export const onlyAlphaNumeric = (string: string, allow = '') => {
	const re = new RegExp(`[^${allow}a-zA-Z0-9]`, 'g')

	return string.replace(re, '').toLowerCase()
}
