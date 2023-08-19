import { fetch } from './1_fetch'
import { z } from 'zod'

it('test keep only higher rank', async () => {
	const data = await fetch(process.env.COINMARKETCAP_KEY as string)
	expect(data.length).toBeGreaterThan(1000)
	expect(() =>
		z
			.array(
				z.object({
					name: z.string(),
					symbol: z.string(),
					cmc_rank: z.number(),
				})
			)
			.parse(data)
	).not.toThrow()
})
