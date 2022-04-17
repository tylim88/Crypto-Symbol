import { keepOnlyHigherRank } from './0_keepOnlyHigherRank'

it('test keep only higher rank', () => {
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
