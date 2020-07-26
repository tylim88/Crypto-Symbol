import 'jest'
import { addNewPair } from './0_addNewPair'
import { getIntactNameSymbolObj, getNameSymbolObj } from './0_getNameSymbolObj'
import { nameSymbolObj } from '~/0_constants'
import {
	nameOfLookupObj,
	nameOfLookupObjExact,
	symbolOfLookupObj,
	symbolOfLookupObjExact,
} from '~/1_data'
import { nameOf } from './0_nameOf'
import { symbolOf } from './0_symbolOf'

describe('2_api', () => {
	describe('test with < {newCoin: NCKLNP} > ', () => {
		it('0_addNewPair', () => {
			addNewPair('newCoin', 'NCKLNP')
			expect.assertions(4)
			const nameOfLookupObj_ = { ...nameOfLookupObj }
			const nameOfLookupObjExact_ = { ...nameOfLookupObjExact }
			const symbolOfLookupObj_ = { ...symbolOfLookupObj }
			const symbolOfLookupObjExact_ = { ...symbolOfLookupObjExact }

			expect(symbolOfLookupObj).toEqual({
				...symbolOfLookupObj_,
				newcoin: 'NCKLNP',
			})
			expect(symbolOfLookupObjExact).toEqual({
				...symbolOfLookupObjExact_,
				newCoin: 'NCKLNP',
			})
			expect(nameOfLookupObj).toEqual({
				...nameOfLookupObj_,
				ncklnp: 'newCoin',
			})
			expect(nameOfLookupObjExact).toEqual({
				...nameOfLookupObjExact_,
				NCKLNP: 'newCoin',
			})
		})
		it('0_getIntactNameSymbolObj', () => {
			expect.assertions(5)
			expect(getIntactNameSymbolObj()).not.toEqual(symbolOfLookupObj)
			expect(getIntactNameSymbolObj()).not.toEqual(symbolOfLookupObjExact)
			expect(getIntactNameSymbolObj()).not.toEqual(nameOfLookupObj)
			expect(getIntactNameSymbolObj()).not.toEqual(nameOfLookupObjExact)
			expect(getIntactNameSymbolObj()).toEqual(nameSymbolObj)
		})
		it('0_getNameSymbolObj', () => {
			expect.assertions(5)
			expect(getNameSymbolObj()).not.toEqual(symbolOfLookupObj)
			expect(getNameSymbolObj()).toEqual(symbolOfLookupObjExact)
			expect(getNameSymbolObj()).not.toEqual(nameOfLookupObj)
			expect(getNameSymbolObj()).not.toEqual(nameOfLookupObjExact)
			expect(getNameSymbolObj()).not.toEqual(nameSymbolObj)
		})
		it('0_symbolOf', () => {
			expect.assertions(9)
			expect(nameOf('notExist')).toEqual(undefined)
			expect(nameOf('NCKLNP')).toEqual('newCoin')
			expect(nameOf('NCKLNP')).toEqual('newCoin')
			expect(nameOf(' NcK&%(LNP ')).toEqual(undefined)
			expect(nameOf(' N cKlNP ')).toEqual(undefined)
			expect(nameOf(' NcKlnp ')).toEqual('newCoin')
			expect(nameOf('NCKLNP', { exact: true })).toEqual('newCoin')
			expect(nameOf('NCK1LNP', { exact: true })).toEqual(undefined)
			expect(nameOf('BtC')).toEqual('Bitcoin')
		})
		it('0_nameOf', () => {
			expect.assertions(9)
			expect(symbolOf('notExist')).toEqual(undefined)
			expect(symbolOf('newCoin')).toEqual('NCKLNP')
			expect(symbolOf('newCoin')).toEqual('NCKLNP')
			expect(symbolOf(' newcoin ')).toEqual('NCKLNP')
			expect(symbolOf(' NEWCOIN ')).toEqual('NCKLNP')
			expect(symbolOf(' n%$eW& *^Coin ')).toEqual('NCKLNP')
			expect(symbolOf('newCoin', { exact: true })).toEqual('NCKLNP')
			expect(symbolOf('new2Coin', { exact: true })).toEqual(undefined)
			expect(symbolOf(' bITcO in ')).toEqual('BTC')
		})
	})
})
