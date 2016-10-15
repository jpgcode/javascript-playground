/*
 reverseWords.js
 Reverse de words order in a sentence
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const reverseWords = str => {

	const strArr = str.split(' ');
	const reversedSentence = strArr.map((value, index) => strArr[(strArr.length-1)-index]).join(' ');

	return reversedSentence;

}

export default reverseWords;