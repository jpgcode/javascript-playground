/*
 sumNumbers.js
 Get the average of the numbers passed in an array
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

import sumNumbers from './sumNumbers';

const averageNumbers = arr => {

	const digits = arr.length;
	const sum    = sumNumbers(arr);

	const getAverage = (sum, digits) => sum/digits;

	return getAverage(sum, digits);	

}

export default averageNumbers;