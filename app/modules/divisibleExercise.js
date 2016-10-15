/*
 divisibleExercise.js
 Return a text depending if the numbers are divisibles or not
 Author: Jose Pablo Granados <jpgcodecr@gmail.com>
*/

import divisibleNumbers from './divisibleNumbers';

const text = obj => (divisibleNumbers(obj.numbers[0], obj.numbers[1])) ? obj.positiveTxt : obj.negativeTxt;

export default text;