/*
 countVowels.js
 Count the number of vowels insie a string
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const countVowels = str => str.split(/[aeiou]/gi).length - 1;

export default countVowels;