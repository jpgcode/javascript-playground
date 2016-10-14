/*
 smallerNumber.js
 Get the smaller number in an array
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const smallerNumber = arr => {

	const number = arr.reduce((prev, curr) => {
		if(prev > curr || prev === 0){
			return curr;
		}else{
			return prev;
		}
	}, 0);

	return number;

}

export default smallerNumber;