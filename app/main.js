import isPalindrome from './modules/isPalindrome';
import countVowels from './modules/countVowels';
import countConsonants from './modules/countConsonants';
import factorial from './modules/factorial';
import fibonacci from './modules/fibonacci';
import smallerNumber from './modules/smallerNumber';
import higherNumber from './modules/higherNumber';
import sumNumbers from './modules/sumNumbers';
import averageNumbers from './modules/averageNumbers';
import divisibleNumbers from './modules/divisibleNumbers';
import divisibleExercise from './modules/divisibleExercise';
import reverseWords from './modules/reverseWords';
import encrypt from './modules/encryptText';


console.log('isPalindrome: ', isPalindrome('sas'));
console.log('Vowels: ', countVowels('Pedro222'));
console.log('Consonants:', countConsonants('Hola'));
console.log('Factorial', factorial(4));
console.log('Fibonacci', fibonacci(7));
console.log('Smaller Number:', smallerNumber([24,3,22,20]));
console.log('Higher Number:', higherNumber([24,3,22,20]));
console.log('Sum numbers', sumNumbers([2,2,2,2]));
console.log('Average Numbers:', averageNumbers([2,2,5]));
console.log('Divisible Numbers:', divisibleNumbers(10, 5));
console.log('Divisible Exercise:', divisibleExercise({numbers: [100, 3], positiveTxt: 'yeaaah', negativeTxt: 'sorry bro'}));
console.log('Reverse sentence:', reverseWords('Hola soy Jose y me gusta comer pollo'));
console.log('Encrypt text:', encrypt('Hola soy Jose'));