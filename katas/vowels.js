// In this exercise, we will be counting the number of vowels that appear in a given string. 
// For this exercise, consider the following to be vowels: a, e, i, o, and u.
// Create a function named numberOfVowels that will receive a string and return the number of vowels 
// in that string.
const numberOfVowels = function (data) {
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
       // num.push(data[i]);
       num ++;
    } 
  }
  return num;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));