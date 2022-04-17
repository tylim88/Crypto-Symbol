import { cryptoSymbol } from 'crypto-symbol'
import { symbolLookupObject } from '../../src/0_constants'
import { swapKeyAndValue } from '../../src/0_utils'

const pairs = cryptoSymbol({
	newCoin: 'NCKLNP' as const,
	XRP: 'XRPP' as const,
})
describe('test with < {newCoin: NCKLNP} > ', () => {
	it('check new pair', async () => {
		expect(pairs.get().NSPair).toEqual({
			...symbolLookupObject,
			newCoin: 'NCKLNP',
			XRP: 'XRPP',
		})
		expect(pairs.get().SNPair).toEqual(
			swapKeyAndValue({
				...symbolLookupObject,
				newCoin: 'NCKLNP',
				XRP: 'XRPP',
			})
		)
		// await pairs.sync(process.env.COINMARKETCAP_KEY as string)
		expect(pairs.get().NSPair.newCoin).toEqual('NCKLNP')
		expect(pairs.get().SNPair.NCKLNP).toEqual('newCoin')
	})
	it('name lookup', async () => {
		// await pairs.sync(process.env.COINMARKETCAP_KEY as string)
		const nameLookup = pairs.nameLookup
		expect(nameLookup('notExist')).toEqual(undefined)
		expect(nameLookup('NCKLNP')).toEqual('newCoin')
		expect(nameLookup('NCKLNP')).toEqual('newCoin')
		expect(nameLookup(' NcK&%(LNP ')).toEqual('newCoin')
		expect(nameLookup(' N cKlNP ')).toEqual('newCoin')
		expect(nameLookup(' NcKlnp ')).toEqual('newCoin')
		expect(nameLookup('NCKLNP', { exact: true })).toEqual('newCoin')
		expect(nameLookup('NCK1LNP', { exact: true })).toEqual(undefined)
		expect(nameLookup('BtC')).toEqual('Bitcoin')
		expect(nameLookup('  @Ltc!   ')).toEqual('Litecoin')
		expect(nameLookup('  @Ltc!   ', { exact: true })).toEqual(undefined)
		expect(nameLookup('Ltc', { exact: true })).toEqual(undefined)
		expect(nameLookup('LTC', { exact: true })).toEqual('Litecoin')
	})
	it('symbol lookup', async () => {
		// await pairs.sync(process.env.COINMARKETCAP_KEY as string)
		const symbolLookup = pairs.symbolLookup
		expect(symbolLookup('notExist')).toEqual(undefined)
		expect(symbolLookup('newcoin')).toEqual('NCKLNP')
		expect(symbolLookup('newCoin')).toEqual('NCKLNP')
		expect(symbolLookup(' newcoin ')).toEqual('NCKLNP')
		expect(symbolLookup(' NEWCOIN ')).toEqual('NCKLNP')
		expect(symbolLookup(' n%$eW& *^Coin ')).toEqual('NCKLNP')
		expect(symbolLookup('newCoin', { exact: true })).toEqual('NCKLNP')
		expect(symbolLookup('new2Coin', { exact: true })).toEqual(undefined)
		expect(symbolLookup(' bITcO in ')).toEqual('BTC')
		expect(symbolLookup(' τbITcO in ', { allow: 'τ' })).toEqual('ΤBTC')
		expect(symbolLookup('  liT ec @oin  ')).toEqual('LTC')
		expect(symbolLookup('  liT ec @oin  ', { exact: true })).toEqual(undefined)
		expect(symbolLookup('litecoin', { exact: true })).toEqual(undefined)
		expect(symbolLookup('Litecoin', { exact: true })).toEqual('LTC')
	})
})
