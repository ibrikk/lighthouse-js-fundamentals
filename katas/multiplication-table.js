const multiplicationTable = function (maxValue) {
  let arr = [];
  for (let i = 0; i < maxValue.length; i++) {
    maxValue[i] + maxValue[i];
    arr.push(maxValue[i]);
  }
  return maxValue;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));