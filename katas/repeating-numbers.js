var repeatNumbers = function (data) {
 let finalArr = '';
 for (let i = 0; i < data.length; i++) {
   let firstOutput = '';
   let firstNum = data[i][0];
   let secondNum = data[i][1];
   for (let x = 0; x < secondNum; x++) {
     firstOutput += firstNum;
   }
   finalArr += firstOutput.concat(', ')
 }
 return finalArr;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));