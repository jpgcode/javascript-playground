/*
 countConsonants.js
 Count the number of consonants insie a string
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const countConsonants = str => str.split(/[bcdfghjklmnpqrstvwxyz]/gi).length -1;

export default countConsonants;