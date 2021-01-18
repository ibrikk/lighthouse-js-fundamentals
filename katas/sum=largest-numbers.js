function sumLargestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  let array = [];
  for (let i = numbers.length - 2; i <= numbers.length - 1; i++ ) {
    array.push(numbers[i]);
  }
  return array;
  return array[0] + array[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))