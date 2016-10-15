/*
 smallerNumber.js
 Get the smaller number in an array
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const smallerNumber = arr => {
	if(Array.isArray(arr)){
		return Math.min(...arr);
	}else{
		throw new Error('The argument passed should be an array');
	}
};

export default smallerNumber;