import { expect } from 'chai'
import smallerNumber from '../app/modules/smallerNumber'


describe('smallerNumber', function() {

	describe('passing an array', function() {
		it('should return a number', function() {
		  expect(smallerNumber([2,3])).to.be.a('number')
		})
	})

	describe('passing a string', function() {
		it('should return an Error', function() {
		  	expect(smallerNumber('a')).to.throw('Error')
		})
	})

})