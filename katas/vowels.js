const numberOfVowels = function (data) {
  let num = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      return num.push(data[i]);
    } 
  }
  return num.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));