import { expect } from 'chai'
import smallerNumber from '../app/modules/smallerNumber'


describe('smallerNumber', () => {

	describe('passing an array with numbers', () => {
		it('should return a number', () => {
			expect(smallerNumber([2,3])).to.be.a('number')
		})
	})

	describe('passing an array with text', () => {
		it('should return a number', () => {
			expect(smallerNumber(['2','s'])).to.be.NaN
		})
	})

	describe('passing a string', () => {
		it('should return an Error', () => {
		  	expect(() => smallerNumber('a')).to.throw('The argument passed should be an array')
		})
	})

	describe('passing a bool', () => {
		it('should return an Error', () => {
		  	expect(() => smallerNumber(true)).to.throw('The argument passed should be an array')
		})
	})

	describe('passing an object', () => {
		it('should return an Error', () => {
		  	expect(() => smallerNumber(true)).to.throw('The argument passed should be an array')
		})
	})

})