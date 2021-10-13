/**
 * remove all non alphaNumeric characters from a string
 * also convert it to lower case
 * @param {string} nameString - string that you want to work on
 * @return {string}
 */
export const onlyAlphaNumeric = (
	nameString: string,
	specialCharacterToAllow = ''
) => {
	const re = new RegExp(`[^${specialCharacterToAllow}a-zA-Z0-9]`, 'g')

	return nameString.replace(re, '').toLowerCase()
}
