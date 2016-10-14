/*
 smallerNumber.js
 Get the smaller number in an array
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const smallerNumber = arr => {

	const number = arr.reduce((prev, curr) => {
		return (prev > curr || prev === 0)? curr : prev;
	}, 0);

	return number;

}

export default smallerNumber;