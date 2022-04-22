import { keepOnlyHigherRank } from './0_keepOnlyHigherRank'

describe('test keep only higher rank', () => {
	it('ascending order', () => {
		expect(
			keepOnlyHigherRank([
				{ name: 'a', symbol: 'A', cmc_rank: 2 },
				{ name: 'b', symbol: 'B', cmc_rank: 3 },
				{ name: 'B', symbol: 'u', cmc_rank: 4 },
				{ name: 'Z', symbol: 'U', cmc_rank: 5 },
				{ name: 'Y', symbol: 'b', cmc_rank: 50 },
			])
		).toEqual([
			{
				name: 'a',
				symbol: 'A',
				cmc_rank: 2,
			},
			{ name: 'b', symbol: 'B', cmc_rank: 3 },
			{ name: 'Z', symbol: 'U', cmc_rank: 5 },
		])
	})
	it('descending order', () => {
		expect(
			keepOnlyHigherRank([
				{ name: 'Y', symbol: 'b', cmc_rank: 50 },
				{ name: 'Z', symbol: 'U', cmc_rank: 5 },
				{ name: 'B', symbol: 'u', cmc_rank: 4 },
				{ name: 'b', symbol: 'B', cmc_rank: 3 },
				{ name: 'a', symbol: 'A', cmc_rank: 2 },
			])
		).toEqual([
			{ name: 'b', symbol: 'B', cmc_rank: 3 },
			{
				name: 'a',
				symbol: 'A',
				cmc_rank: 2,
			},
		])
	})
})
