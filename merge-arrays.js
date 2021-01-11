function merge(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
    arr1.sort();
  }
  return arr1;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));