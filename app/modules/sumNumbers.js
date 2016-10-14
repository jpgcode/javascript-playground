/*
 sumNumbers.js
 Sum the numbers passed in an array
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const sumNumbers = arr => {

	const sum = arr.reduce((prev, curr) => {
		return prev+curr;
	}, 0);

	return sum;

}

export default sumNumbers;