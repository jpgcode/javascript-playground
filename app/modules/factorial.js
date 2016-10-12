/*
 factorial.js
 A factorial in Math is the product of all positive integers less than or equal to n
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const factorial = (n) => {

	if(n === 0) {
		return 1;
	}
	
	return n * factorial(n - 1);

}

export default factorial;