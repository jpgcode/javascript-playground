/*
 encryptText.js
 Encript a string shifting each character value 5 positions in the alphabet
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

const encrypt = str => {

	const chars = [...str];

	const encriptedTxt = chars.map(value => String.fromCharCode(value.charCodeAt(0)+5));

	return encriptedTxt.join('');

}

export default encrypt;