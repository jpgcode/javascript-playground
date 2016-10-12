/*
 isPalindrome.js
 Check if a string is a palindrome
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const isPalindrome = txt => 
	prepTxt(txt) === [...prepTxt(txt)].reverse().join('');

const prepTxt = txt => 
	txt.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

export default isPalindrome;