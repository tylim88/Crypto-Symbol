import 'jest'
import { onlyAlphaNumeric } from './0_onlyAlphaNumeric'
import { swapKeyAndValue } from './0_swapKeyAndValue'
import { trimAndLowerCase } from './0_trimAndLowerCase'

describe('0_utils', () => {
	describe('0_onlyAlphaNumeric', () => {
		it('test with < sjs 2&B%^kS_a?ui2 >', () => {
			expect.assertions(1)
			expect(onlyAlphaNumeric(' sjs 2&B%^kS_a?ui2 ')).toEqual('sjs2bksaui2')
		})
	})

	describe('0_swapKeyAndValue', () => {
		it('test with {a:"1",b:"2",c:"3"}', () => {
			expect.assertions(1)
			expect(swapKeyAndValue({ a: '1', b: '2', c: '3' })).toEqual({
				'1': 'a',
				'2': 'b',
				'3': 'c',
			})
		})
	})

	describe('0_trimAndLowerCase', () => {
		it('test with < sd U&Y-P  >', () => {
			expect.assertions(1)
			expect(trimAndLowerCase(' sd U&Y-P  ')).toEqual('sd u&y-p')
		})
	})
})
