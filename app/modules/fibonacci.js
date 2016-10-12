/*
 fibonacci.js
 The fibonacci numbers are based in the addition of the previous result with the current one
 For example:
 0 + 1 = 1
 1 + 1 = 2
 1 + 2 = 3
 2 + 3 = 5
 3 + 5 = 7
 ...
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const fibonacci = (num) => {

	if (num <= 1) return 1;

	return fibonacci(num - 1) + fibonacci(num - 2);

}

export default fibonacci;