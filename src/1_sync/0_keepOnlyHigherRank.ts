export type Data = { name: string; symbol: string; cmc_rank: number }[]

export const keepOnlyHigherRank = (data: Data) => {
	const nameObj: Record<string, number> = {}
	const symbolObj: Record<string, number> = {}
	let arr: Data = []
	// edge case https://github.com/tylim88/Crypto-Symbol/issues/16
	data.forEach(i => {
		if (
			i.cmc_rank < (nameObj[i.name.toLowerCase()] || Infinity) &&
			i.cmc_rank < (symbolObj[i.symbol.toLowerCase()] || Infinity)
		) {
			if (nameObj[i.name.toLowerCase()]) {
				arr = arr.filter(j => j.name.toLowerCase() !== i.name.toLowerCase())
			}
			if (symbolObj[i.symbol.toLowerCase()]) {
				arr = arr.filter(j => j.symbol.toLowerCase() !== i.symbol.toLowerCase())
			}
			nameObj[i.name.toLowerCase()] = i.cmc_rank
			symbolObj[i.symbol.toLowerCase()] = i.cmc_rank
			arr.push(i)
		}
	})
	return arr
}
